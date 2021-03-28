const {
    cssSelector,
    DOMElementPresenceCheck,
    isValidSSNInstruct,
} = require('../utils/helpers');


async function fillAddressLine1(page, field, addressLine1) {
    await _fillField(page, field, addressLine1);
}

async function fillState(page, field, state) {
    await _fillField(page, field, state);
}

async function fillEmail(page, field, email) {

    await _fillField(page, field, email);
}


async function fillCity(page, field, city) {

    await _fillField(page, field, city);
}

async function fillPhoneNumber(page, field, phoneNumber) {

    await _fillField(page, field, phoneNumber);
}


async function fillPasswordConfirmation(page, field, password) {

    await _fillField(page, field, password);
}

async function fillPassword(page, field, password) {

    await _fillField(page, field, password);
}


async function fillUserId(page, field, userId) {

    await _fillField(page, field, userId);
}


async function fillStreetAddressNumber(page, field, streetNum) {

    await _fillField(page, field, streetNum);
}

async function fillZipcode(page, field, zipcode) {

    await _fillField(page, field, zipcode);
}

async function fillFullDOB(page, field, date) {

    await _fillField(page, field, date);
}

async function fillMonth(page, field, month) {

    await _fillField(page, field, month);
}

async function fillExtraFields(page, field, data) {

    await _fillField(page, field, data);
}

async function fillDay(page, field, day) {

    await _fillField(page, field, day);
}

async function fillYear(page, field, year) {

    await _fillField(page, field, year);
}

async function fillName(page, field, name) {

    await _fillField(page, field, name);
}

async function fillSSN(page, field, ssn) {
    isValidSSNInstruct(field);

    const last_n = ssn.slice(ssn.length - field['digits'])
    await  _fillField(page, field, last_n)
}

async function _fillField(page, field, data) {
    await DOMElementPresenceCheck(page, field);
    let selector = cssSelector(field);

    let hasTouchEvent = field['event'] === 'touch';


    if (!hasTouchEvent) {
        await page.evaluate((data, selector) => {

            const input = document.querySelector(selector);

            input.value = data;

            console.log(input)
        }, data, selector);
    }
    else {
        await page.type(selector, data, {delay: 10});
    }

}


module.exports = {
    fillMonth,
    fillDay,
    fillYear,
    fillName,
    fillSSN,
    fillFullDOB,
    fillZipcode,
    fillStreetAddressNumber,
    fillUserId,
    fillPassword,
    fillPasswordConfirmation,
    fillPhoneNumber,
    fillExtraFields,
    fillCity,
    fillEmail,
    fillState,
    fillAddressLine1
}