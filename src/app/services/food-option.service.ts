import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { BackendFoodOption, FoodOption, ManualFoodOption } from '../entities/option';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnectService } from './connect.service';


@Injectable({
  providedIn: 'root'
})
export class FoodOptionService {

  rootUrl: string = '';

  constructor(
    private optionFoodStrategy: ManualFoodOption,
    private http: HttpClient,
    private connect: ConnectService
  ) {
    this.rootUrl = this.connect.getRootUrl();
  }

  getFoodOptions() {
    return this.optionFoodStrategy.get()
  }

  getBackendFoodOptions(): Observable<any> {
    let url = this.rootUrl + '/food/api';
    let result = this.http.get(url);
    return result
  }

}
