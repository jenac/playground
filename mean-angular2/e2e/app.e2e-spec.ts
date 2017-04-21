import { MeanAngular2Page } from './app.po';

describe('mean-angular2 App', function() {
  let page: MeanAngular2Page;

  beforeEach(() => {
    page = new MeanAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
