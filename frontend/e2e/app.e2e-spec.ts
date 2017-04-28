import { MassMatrixUiPage } from './app.po';

describe('mass-matrix-ui App', () => {
  let page: MassMatrixUiPage;

  beforeEach(() => {
    page = new MassMatrixUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
