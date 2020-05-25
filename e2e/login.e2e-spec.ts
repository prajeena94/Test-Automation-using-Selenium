import { $$, browser } from 'protractor';
import { LoginPage } from './login.po';

describe('Login Page', () => {
	let page: LoginPage;

	beforeEach(async () => {
		page = new LoginPage();
	});

	it('Verify elements of Page', () => {
		page.navigateTo();
		$$('.form-group').each((item, index) => {
			if (index === 0) {
				expect(item.getText()).toBe('UserName/Email');
			}
			if (index === 1) {
				expect(item.getText()).toBe('Password1');
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
		expect($$('.email-error').isDisplayed()).toBeTruthy();
	});

	it('Show Error when email is not registered', () => {
		page.navigateTo();
		$$('#email').sendKeys('test@test.com');
		$$('#password').sendKeys('Password');
		$$('.btn-primary').click();
		expect($$('.failure').isDisplayed()).toBeTruthy();
	});

	it('Provide valid credentials redirect to home page', () => {
		page.navigateTo();
		$$('#email').sendKeys('testuser@gmail.com');
		$$('#password').sendKeys('password');
		$$('.btn-primary').click();
		browser.getCurrentUrl().then((res) => {
			expect(res).toContain('home');
		});
	});
});
