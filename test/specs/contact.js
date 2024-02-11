import ContactPage from '../pages/contact-page';
import { faker } from '@faker-js/faker';

describe('Contact', () => {
    it('Get success message', async() => {
        await ContactPage.open();

        await ContactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.lines())

        //Assert

        const successMessage = await ContactPage.successMessage;
        await expect(successMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
});