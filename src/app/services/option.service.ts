import { Injectable, inject } from '@angular/core';
import { MOCK_OPTIONS } from '../data/mock/options';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Food } from '../entities/food';


@Injectable({
  providedIn: 'root'
})
export class OptionService {

  item$: Observable<Food[]>;
  firestore: Firestore = inject(Firestore);

  constructor(
  ) {
    
    const itemCollection = collection(this.firestore, 'food');
    this.item$ = collectionData(itemCollection) as Observable<any>;
  }

  getMockOptions() {
    return MOCK_OPTIONS
  }

  getDbOptions() {
    return this.item$
  }

}
