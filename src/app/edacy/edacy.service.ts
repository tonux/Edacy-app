import { Injectable } from '@angular/core';

import { Edacy } from './edacy';
import { EDACY_ITEMS } from '../../api/edacy-data';

@Injectable()
export class EdacyService {
  pItems: Edacy[] = EDACY_ITEMS;

  constructor() { }

  getEdacysFromData(): Edacy[] {
    console.log('----> get edacy 3');
    return this.pItems;
  }

  addEdacy(edacy: Edacy) {
    this.pItems.push(edacy);
  }

  updateEdacy(edacy: Edacy) {
    const index = this.pItems.map(x => x.id).indexOf(edacy.id);
    this.pItems[index] = edacy;
  }

  deleteEdacy(edacy: Edacy) {
    this.pItems.splice(this.pItems.indexOf(edacy), 1);
  }
}
