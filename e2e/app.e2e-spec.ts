import { TorrentLamaUiPage } from './app.po';

describe('torrent-lama-ui App', () => {
  let page: TorrentLamaUiPage;

  beforeEach(() => {
    page = new TorrentLamaUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
