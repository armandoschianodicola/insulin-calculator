import { Injectable, inject } from '@angular/core';
import { MOCK_OPTIONS } from '../data/mock/options';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OptionService {

  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(
  ) {
    
    const itemCollection = collection(this.firestore, 'food');
    this.item$ = collectionData(itemCollection);
  }

  getMockOptions() {
    return MOCK_OPTIONS
  }

  getDbOptions() {
    let data = this.item$
    // let data = this.db.object('food').valueChanges()
    console.log(data)
  }

}
