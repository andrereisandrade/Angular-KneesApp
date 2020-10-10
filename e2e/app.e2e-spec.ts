import { KneesappPage, PartipantPage } from './app.po';

describe('kneesapp App', () => {
  let page: KneesappPage;

  beforeEach(() => {
    page = new KneesappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText().isPresent());
  });
});

describe('Add Participant', () => {
  let pageParticipant: PartipantPage;

  beforeEach(() => {
    pageParticipant = new PartipantPage();
  });

  it('should prompt add new participant form', () => {
    pageParticipant.navigateTo();
    const newParticpantButton = pageParticipant.getNewParticipantButton();
    newParticpantButton.click();
  });
});
