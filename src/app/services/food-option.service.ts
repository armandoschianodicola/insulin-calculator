import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { ManualFoodOption } from '../entities/option';


@Injectable({
  providedIn: 'root'
})
export class FoodOptionService {

  constructor(
    private optionFoodStrategy: ManualFoodOption
  ) {}

  getManualFoodOptions() {
    return this.optionFoodStrategy.get()
  }

}
