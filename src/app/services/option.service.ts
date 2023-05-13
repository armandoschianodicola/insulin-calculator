import { Injectable } from '@angular/core';
import { MOCK_OPTIONS } from '../data/mock/options'; 

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor() { }

  getOptions() {
    return MOCK_OPTIONS
  }

}
