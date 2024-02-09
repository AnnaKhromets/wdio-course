class ContactPage {
    open() {
        return browser.url('/contact');
    }
    get inputName() {
        return $('.contact-name input');
    }
    get inputEmail() {
        return $('.contact-email input');
    }
    get inputPhone() {
        return $('.contact-phone input');
    }
    get inputContactMes() {
        return $('.contact-message textarea');
    }
    get submBtn() {
        return $('button[type=submit]');
    }
    get successMessage() {
        return $("[role='alert']")
    }

    async submitForm(name, email, phone, message) {
        await this.inputName.addValue(name);
        await this.inputEmail.addValue(email);
        await this.inputPhone.addValue(phone);
        await this.inputContactMes.addValue(message);
        await this.submBtn.click();
    }
}

export default new ContactPage();