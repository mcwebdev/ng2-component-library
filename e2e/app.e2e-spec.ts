import { SexyPantsPage } from './app.po';

describe('sexy-pants App', () => {
  let page: SexyPantsPage;

  beforeEach(() => {
    page = new SexyPantsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
