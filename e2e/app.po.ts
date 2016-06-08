export class AskusGlobalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('askus-global-app h1')).getText();
  }
}
