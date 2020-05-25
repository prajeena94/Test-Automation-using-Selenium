import { RegisterPage } from './register.po';
import { $$ } from 'protractor';

describe('Register Page', () => {
	let page: RegisterPage;

	beforeEach(async () => {
		page = new RegisterPage();
	});

	it('Verify elements of Page', () => {
		page.navigateTo();
		$$('.form-group').each((item, index) => {
			if (index === 0) {
				expect(item.getText()).toBe('Name1');
			}
			if (index === 1) {
				expect(item.getText()).toBe('Email');
			}
			if (index === 2) {
				expect(item.getText()).toBe('User Name');
			}
			if (index === 3) {
				expect(item.getText()).toBe('Password');
			}
			if (index === 4) {
				expect(item.getText()).toBe('Confirm Password');
			}
		});
	});

	it('Show Error when no field value is provided', () => {
		page.navigateTo();
		$$('.btn-primary').click();
		expect($$('.help-block').isDisplayed()).toBeTruthy();
	});

	it('Show Error when email is invalid', () => {
		page.navigateTo();
		$$('#email').sendKeys('test');
		$$('.btn-primary').click();
		expect($$('.email-error').isDisplayed()).toBeFalsy();
	});

	it('Show Error when password mismatch', () => {
		page.navigateTo();
		$$('#password').sendKeys('Abcdef123+');
		$$('#confirm-password').sendKeys('Qwert43');
		$$('.btn-primary').click();
		expect($$('.password-mismatch').isDisplayed()).toBeTruthy();
	});

	it('Show Error when password does not match', () => {
		page.navigateTo();
		$$('#user-name').sendKeys('test-user');
		$$('#name').sendKeys('user');
		$$('#email').sendKeys('test@email.com');
		$$('#password').sendKeys('Abcdef123+');
		$$('#confirm-password').sendKeys('Qwert43');
		$$('.btn-primary').click();
		expect($$('.success').isDisplayed()).toBeTruthy();
	});
});
