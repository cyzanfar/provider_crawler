const puppeteer = require('puppeteer-extra');
const moment = require('moment');

const StealthPlugin =  require('puppeteer-extra-plugin-stealth');
const ProviderSelector = require('../models/selectors');
const { PROVIDERS } = require('../data/providers');
const { logger }  = require('../utils/logger');

const { cssSelector, DOMElementPresenceCheck,
    keyboardPressAction, isValidFieldInstruct,
    keyboardTypeAction, getSelectionOption
} = require('../utils/helpers');

const { FieldFiller } = require('./field_filler')

const { browserOptions, blockedResourceTypes, skippedResources } = require('./browser_options')
puppeteer.use(StealthPlugin())


async function startCrawl(
    puppeteer,
    sites,
    browserOptions,
    data,
) {
    const browser = await puppeteer.launch(
        browserOptions || {});

    const prov = await ProviderSelector.getProviders({'defaultCaptcha': false})
    const page = await browser.newPage();

    await skipAssetDownload(page)

    for (const p of prov) {

        logger.info(`Processing ${p.name}`);

        try {
            await loadPage(page, p.url);
        } catch (e) {
            logger.error(`${p} | REQUEST FAILED | error: ${e}`)
            console.log('ERROR', e)
            continue
        }


        try {
            await loadPage(page, p.url);
            if (!p.instruct.multistep) {
                await singleStepRegistration(page, p.instruct, p.name, data);

            }
            else if (p.instruct.multistep) {
                await multiStepRegistration(page,  p.instruct, p.name, data)
            }
        } catch (e) {
            logger.error(`Crawler failed for provider ${p.name} with error: ${e}`)
            console.log('CRAWL ERROR', e)
        }
    }

    await browser.close();
    return true
}

async function skipAssetDownload(page) {
    await page.setRequestInterception(true);

    page.on('request', request => {
        const requestUrl = request._url.split('?')[0].split('#')[0];
        if (
            blockedResourceTypes.indexOf(request.resourceType()) !== -1 ||
            skippedResources.some(resource => requestUrl.indexOf(resource) !== -1)
        ) {
            request.abort();
        } else {
            request.continue();
        }
    });
}

async function multiStepRegistration(page, instruct, sitename) {
    const steps = instruct['steps'];

    for (const step in steps) {
        if (!steps.hasOwnProperty(step)) continue

        if (steps[step]['presence_selector']) await DOMElementPresenceCheck(
            page, steps[step]['presence_selector']);

        if (steps[step]['fields']) await formFieldFiller(
            page, steps[step]['fields'], sitename, data)

        if (steps[step]['actions']) {
            await executeKeyboardAction(page, steps[step]['actions'])

            if (steps[step]['success_criteria']) await waitForElement(
                page, steps[step]['success_criteria']['element']);
        }

        if (steps[step]['submission']) {
            await formSubmission(
                page,
                steps[step]['submission']['element']);

            if (steps[step]['success_criteria']) {
                await waitForElement(
                    page,
                    steps[step]['success_criteria']['element']);
            }
        }
    }
    await submitForm(page, instruct, sitename)
}


async function singleStepRegistration(page, instruct, sitename) {
    if (instruct['presence_selector']) await DOMElementPresenceCheck(
        page, instruct['presence_selector']);

    if (instruct['fields']) {
        await formFieldFiller(page, instruct['fields'], sitename, data)
    }
    await submitForm(page, instruct, sitename)
}


async function formFieldFiller(page, fields, sitename, data) {

    if (fields['checkbox']) {
        await formSubmission(
            page,
            fields['checkbox']['element']);
    }

    if (fields['first_name']) await inputNameField(
        page,
        data['first_name'],
        fields['first_name']);

    if (fields['last_name']) await inputNameField(
        page,
        data['last_name'],
        fields['last_name']);

    if (fields['dob']) await inputDOB(
        page,
        data['dob'],
        fields['dob']);

    if (fields['ssn']) await inputSSN(
        page,
        data['ssn'],
        fields['ssn']);

    if (fields['zipcode']) await inputZipcode(
        page,
        data['zipcode'],
        fields['zipcode']);

    if (fields['city']) await inputCity(
        page,
        data['city'],
        fields['city']);

    if (fields['address_line1']) await inputAddressLine(
        page,
        data['street_address'],
        fields['address_line1']);

    if (fields['street_address_number']) await inputStreetAddressNumber(
        page,
        data['street_address_number'],
        fields['street_address_number']);

    if (fields['phone_number']) await inputPhoneNumber(
        page,
        data['phone_number'],
        fields['phone_number']);

    if (fields['email']) await inputEmail(
        page,
        data['generated_email'],
        fields['email']);

    if (fields['email_confirm']) await inputEmail(
        page,
        data['generated_email'],
        fields['email_confirm']);

    if (fields['user_id']) await inputUserId(
        page,
        data['generated_userid'],
        fields['user_id']);

    if (fields['password']) await inputPassword(
        page,
        data['generated_pwd'],
        fields['password']);

    if (fields['confirm_password']) await inputPasswordConfirmation(
        page,
        data['generated_pwd'],
        fields['confirm_password']);

    if (fields['state']) await inputStateField(
        page,
        data['state'],
        fields['state'],
        sitename
    )

}

async function inputStateField(page, state, field, sitename) {

    if (field['actions']) {
        for (const action of field['actions']) {

            if (action['action_type']) {
                if (action['action_type'] === 'dropdown') {
                    await DOMElementPresenceCheck(page, action)
                    await executeClick(page, cssSelector(action))

                } else if (action['action_type'] === 'select_dropdown') {
                    action['value'] = getSelectionOption(sitename, state, action)
                    await DOMElementPresenceCheck(page, action)
                    await executeClick(page, cssSelector(action))

                }

            }
        }
    }
    else {
        isValidFieldInstruct(field);
        await FieldFiller.fillState(page, field['fill_element'], state);
    }
}

async function submitForm(page, instruct, sitename) {
    if (instruct['submission']) {
        await formSubmission(
            page,
            instruct['submission']['element']);

        await waitForElement(
            page,
            instruct['failing_criteria']['element']);
    }

    if (instruct['failing_criteria']) {
        let result = await checkValidError(
            page,
            instruct['failing_criteria']['element'],
            instruct['failing_criteria']['expected_message']);

        if (result) {
            logger.info(`${sitename}, no account here`);
        }
    }
}


async function executeKeyboardAction(page, actions) {
    for (const action of actions) {
        if (action['type'] === 'keyboardPress') {
            await keyboardPressAction(page, action['value'])

            if (action['success_criteria']) await waitForElement(
                page, action['success_criteria']['element']);
        }
        else if (action['type'] === 'keyboardType') {
            await keyboardTypeAction(page, action['value'])

            if (action['success_criteria']) {
                await waitForElement(
                    page,
                    action['success_criteria']['element']);

            }
        }
    }
}


async function checkValidError(page, elem, expectedMsq) {
    let selector = cssSelector(elem);

    return await page.evaluate((elem, selector, expectedMsq) => {

        let el = document.querySelector(selector);
        console.log(el.innerText)
        return el.innerText.includes(expectedMsq);

    }, elem, selector, expectedMsq);
}


async function waitForElement(page, elem) {
    try {
        await page.waitForSelector(cssSelector(elem),
            {timeout: 5000});

    } catch (e) {
        logger.error(`waiting for element with 
        selector ${cssSelector(elem)} failed: ${e}`)
    }
}

async function formSubmission(page, submitEl) {
    await DOMElementPresenceCheck(
        page,
        submitEl);

    let selector = cssSelector(submitEl)

    await executeClick(page, selector)
}

async function executeClick(page, selector) {
    return page.evaluate((selector) => {
        document.querySelector(selector).click()
    }, selector);
}


async function inputStreetAddressNumber(page, streetAddrNum, field) {
    isValidFieldInstruct(field);

    await FieldFiller.fillStreetAddressNumber(page, field['fill_element'], streetAddrNum)
}

async function inputZipcode(page, zipcode, field) {
    isValidFieldInstruct(field);
    await FieldFiller.fillZipcode(page, field['fill_element'], zipcode);
}

async function inputPassword(page, password, field) {
    isValidFieldInstruct(field);
    await FieldFiller.fillPassword(page, field['fill_element'], password);
}

async function inputPhoneNumber(page, phoneNumber, field) {
    isValidFieldInstruct(field);
    await FieldFiller.fillPhoneNumber(page, field['fill_element'], phoneNumber);
}

async function inputPasswordConfirmation(page, password, field) {
    isValidFieldInstruct(field);
    await FieldFiller.fillPasswordConfirmation(page, field['fill_element'], password);
}

async function inputCity(page, userId, field) {
    isValidFieldInstruct(field);
    await FieldFiller.fillCity(page, field['fill_element'], userId);
}


async function inputAddressLine(page, addressLine1, field) {
    isValidFieldInstruct(field);
    await FieldFiller.fillAddressLine1(page, field['fill_element'], addressLine1);
}

async function inputEmail(page, email, field) {
    isValidFieldInstruct(field);
    await FieldFiller.fillEmail(page, field['fill_element'], email);
}

async function inputUserId(page, userId, field) {
    isValidFieldInstruct(field);
    await FieldFiller.fillUserId(page, field['fill_element'], userId);
}

async function inputDOB(page, dob, field) {
    isValidFieldInstruct(field);

    const dobField = field['multifield'] ? (field['multi_field_fill_element']) :
        (field['fill_element']);

    const dobToDate = moment(dob).utc();

    if ('fill_element' in field) await FieldFiller.fillFullDOB(
        page, dobField, dobToDate.format(field['format']))

    if ('multi_field_fill_element' in field) {

        if (dobField['month']) await FieldFiller.fillMonth(
                page, dobField['month'], getMonth(dobToDate));

        if (dobField['day']) await FieldFiller.fillDay(
            page, dobField['day'], getDay(dobToDate));

        if (dobField['year']) await FieldFiller.fillYear(
            page, dobField['year'], getYear(dobToDate));

        if (dobField['extra_fields']) {
            await inputExtraFields(
                page, dobField['extra_fields'], dobToDate);
        }
    }

}

async function inputExtraFields(page, extraFields, dobToDate) {
    if (extraFields['full_dob_iso']) {
        await DOMElementPresenceCheck(
            page,
            extraFields['full_dob_iso']);

        await FieldFiller.fillExtraFields(
            page,
            extraFields['full_dob_iso'],
            dobToDate.format('YYYY-MM-DD'));
    }
}

async function inputSSN(page, ssn, field) {
    isValidFieldInstruct(field);

    await FieldFiller.fillSSN(page,field['fill_element'], ssn);
}


async function inputNameField(page, name, field) {
    isValidFieldInstruct(field);

    await FieldFiller.fillName(page, field['fill_element'], name);

}


const getMonth = (dobToDate) => {
    return dobToDate.format('MM');
}

const getYear = (dobToDate) => {
    return dobToDate.format('YYYY');
}

const getDay = (dobToDate) => {
    return dobToDate.format('DD');
}


async function loadPage(page, url) {
    return await page.goto(url, {
        waitUntil: 'networkidle2', timeout: 10000
    })
}


const data = {
    'first_name': 'Dandi',
    'last_name': 'Levi',
    'dob': '1987-02-12',
    'ssn': '213746230',
    'zipcode': '10001',
    'city': 'New York',
    'street_address': '385 7th Avenue',
    'street_address_number': '385',
    'phone_number': '9174548012',
    'generated_email': 'cghaz101@gmail.com',
    'generated_userid': 'cghazanf1201',
    'generated_pwd': 'Hnfcef04fc.23'
}

const defaultProv = [
    // 'Fidelity Investments',
    // 'Voya Financial',
    'Principal Financial Group',
    'MassMutual',
    'OneAmerica',
    'AXA Equitable'
]
startCrawl(puppeteer, PROVIDERS, browserOptions, data, defaultProv)



