import { MiProyectoPage } from './app.po';

describe('mi-proyecto App', () => {
  let page: MiProyectoPage;

  beforeEach(() => {
    page = new MiProyectoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
