import { $$, browser } from 'protractor';
import { HomePage } from './home.po';

describe('Home Page', () => {
	let page: HomePage;

	beforeEach(async () => {
		page = new HomePage();
	});

	it('Verify logout button click', () => {
		page.navigateTo();
		$$('.btn-primary').click();
		browser.getCurrentUrl().then((res) => {
			expect(res).toContain('login');
		});
	});
});
