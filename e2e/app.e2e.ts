import { AskusGlobalPage } from './app.po';

describe('askus-global App', function() {
  let page: AskusGlobalPage;

  beforeEach(() => {
    page = new AskusGlobalPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('askus-global works!');
  });
});
