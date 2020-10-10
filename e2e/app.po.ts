import { browser, by, element } from 'protractor';

export class KneesappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('btn btn-default'));
  }
}

export class PartipantPage {
  navigateTo() {
    return browser.get('/participante');
  }

  getNewParticipantButton() {
    return element(by.className('btn btn-primary'));
  }

}
