import { Angular4Oberflaeche2Page } from './app.po';

describe('angular4-oberflaeche2 App', () => {
  let page: Angular4Oberflaeche2Page;

  beforeEach(() => {
    page = new Angular4Oberflaeche2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
