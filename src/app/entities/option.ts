import { HttpClient, HttpHeaders } from '@angular/common/http';
import { foodOptions } from '../data/foodOptions';
import { ConnectService } from '../services/connect.service';
import { Observable } from 'rxjs';

export abstract class FoodOption {
  constructor(public name: string, public carbs: number) {}

  abstract get(): void;
}

export class ManualFoodOption extends FoodOption {
  get(): { name: string; carbs: number }[] {
    return foodOptions;
  }
}

export class BackendFoodOption extends FoodOption {
  rootUrl: string = '';
 
  constructor(
    name: string,
    carbs: number,
    connect: ConnectService,
    private http: HttpClient
  ) {
    super(name, carbs);
    this.rootUrl = connect.getRootUrl();
  }

  get():  Observable<FoodOption>  {
    let url = this.rootUrl + '/food/api/';
    let result = this.http.get<FoodOption>(url, {
      headers: new HttpHeaders('Access-Control-Allow-Origin'),
      responseType: 'json',
      withCredentials: true,
    });
    console.log(result)
    return result
  }
}
