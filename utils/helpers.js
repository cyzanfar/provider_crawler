const { logger } = require('./logger');
const _ = require('lodash')

const { SITE_STATE_OPTIONS_FIELD,
    STATE_FIELD_MAP} = require('./instruct_helper');

function cssSelector(tag) {
    const cssSelectors = {
        'id': '#',
        'class': '.',
        '': '', // this is so we can select by attribute name input[data-attr='something']
    }

    return `${tag['type']}${cssSelectors[tag['attr']]}${tag['value']}`
}

async function DOMElementPresenceCheck(page, field, sitename) {
    let selector = cssSelector(field);
    const is_valid = await page.evaluate((selector) => {
        return document.querySelector(selector) !== null

    }, selector);

    if (!is_valid) {

        logger.error(`${sitename}, target element does not exists ` +
            `attr: ${field['attr']}, value: ${field['value']}`);

    }
    return is_valid
}

async function keyboardPressAction(page, action) {
    await page.keyboard.press(action);
}

async function keyboardTypeAction(page, action) {
    await page.keyboard.type(action);
}

function isValidSSNInstruct(field) {
    const is_valid = (field['digits'] &&
        9 >= field['digits'] && field['digits'] >= 4)

    if (!is_valid) {
        logger.error('isValidSSNInstruct: Digits key in' +
            ' ssn field is invalid or undefined')
    }
    return is_valid
}

function isValidFieldInstruct(field) {
    let is_valid = ((field) => {
        let valid = (field['required'] &&  'required' in field) &&
            ('multifield' in field) && ('label' in field);

        if (field['multifield']) {
            return 'multi_field_fill_element' in field && valid
        } else {
            return 'fill_element' in field && valid
        }
    })(field);

    if (!is_valid) {
        logger.error('isValidFieldInstruct: some keys in ' +
            `the field instructor are undefined or invalid ${JSON.stringify(field)}`)

        throw 'Invalid instructor fields'
    }
    return is_valid
}


function getSelectionOption(site, optionValue, instruct) {
    const option = _.filter(
        STATE_FIELD_MAP, s => s['Code'] === optionValue)[0]

    if (instruct['field_value'] === 'full_state_name') {
        return SITE_STATE_OPTIONS_FIELD[site][option['State']]
    }
    else if (instruct['field_value'] === 'accr_state_name') {
        return SITE_STATE_OPTIONS_FIELD[site][option['Code']]
    }


}


module.exports = {
    cssSelector,
    DOMElementPresenceCheck,
    isValidSSNInstruct,
    isValidFieldInstruct,
    keyboardPressAction,
    keyboardTypeAction,
    getSelectionOption
}
