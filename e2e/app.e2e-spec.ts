import { SpotifyManagerPage } from './app.po';

describe('spotify-manager App', () => {
  let page: SpotifyManagerPage;

  beforeEach(() => {
    page = new SpotifyManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
