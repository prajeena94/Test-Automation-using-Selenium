import { browser, by, element } from 'protractor';

export class RegisterPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/register') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
