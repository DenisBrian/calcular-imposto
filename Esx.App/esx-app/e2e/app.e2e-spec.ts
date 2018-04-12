import { EsxAppPage } from './app.po';

describe('esx-app App', function() {
  let page: EsxAppPage;

  beforeEach(() => {
    page = new EsxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
