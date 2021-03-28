const {
    cssSelector,
    DOMElementPresenceCheck,
    isValidSSNInstruct,
} = require('../utils/helpers');


class FieldFiller {

    static async  fillAddressLine1(page, field, addressLine1) {
        await this._fillField(page, field, addressLine1);
    }

    static async fillState(page, field, state) {
        await this._fillField(page, field, state);
    }

    static async fillEmail(page, field, email) {

        await this._fillField(page, field, email);
    }


    static async fillCity(page, field, city) {

        await this._fillField(page, field, city);
    }

    static async fillPhoneNumber(page, field, phoneNumber) {

        await this._fillField(page, field, phoneNumber);
    }


    static async fillPasswordConfirmation(page, field, password) {

        await this._fillField(page, field, password);
    }

    static async fillPassword(page, field, password) {

        await this._fillField(page, field, password);
    }


    static async fillUserId(page, field, userId) {

        await this._fillField(page, field, userId);
    }


    static async fillStreetAddressNumber(page, field, streetNum) {

        await this._fillField(page, field, streetNum);
    }

    static async fillZipcode(page, field, zipcode) {

        await this._fillField(page, field, zipcode);
    }

    static async fillFullDOB(page, field, date) {

        await this._fillField(page, field, date);
    }

    static async fillMonth(page, field, month) {

        await this._fillField(page, field, month);
    }

    static async fillExtraFields(page, field, data) {

        await this._fillField(page, field, data);
    }

    static async fillDay(page, field, day) {

        await this._fillField(page, field, day);
    }

    static async fillYear(page, field, year) {

        await this._fillField(page, field, year);
    }

    static async fillName(page, field, name) {

        await this._fillField(page, field, name);
    }

    static  async fillSSN(page, field, ssn) {
        isValidSSNInstruct(field);

        const last_n = ssn.slice(ssn.length - field['digits'])
        await this._fillField(page, field, last_n)
    }

    static async _fillField(page, field, data) {
        await DOMElementPresenceCheck(page, field);
        let selector = cssSelector(field);

        let hasTouchEvent = field['event'] === 'touch';


        if (!hasTouchEvent) {
            await page.evaluate((data, selector) => {

                const input = document.querySelector(selector)
                input.value = data;

            }, data, selector);
        }
        else {
            await page.type(selector, data, {delay: 10});
        }

    }

}


module.exports = {
    FieldFiller
}