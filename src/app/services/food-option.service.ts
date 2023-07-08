import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { BackendFoodOption, FoodOption, ManualFoodOption } from '../entities/option';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnectService } from './connect.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FoodOptionService {

  rootUrl: string = '';
  endpoint: string = '';

  constructor(
    private optionFoodStrategy: ManualFoodOption,
    private http: HttpClient,
    private connect: ConnectService
  ) {
    this.rootUrl = this.connect.getLocalRootUrl();
    this.endpoint = '/food/api'
  }

  getFoodOptions() {
    return this.optionFoodStrategy.get()
  }

  getFood(id: number): Observable<any> {
    let url = this.rootUrl + this.endpoint + '/' + id;
    let result = this.http.get(url);
    
    return result
  }

  getBackendFoodOptions(): Observable<any> {
    let url = this.rootUrl + this.endpoint;
    let result = this.http.get(url);
    return result
  }

  postBackendFoodOptions(id: number, body: any): any {

    try {
      let url = this.rootUrl + this.endpoint + '/' + id;
      console.log(url)
      
      return this.http.put<any>(url, body, {
        headers: new HttpHeaders('Access-Control-Allow-Origin'),
        responseType: 'json',
      });
    } catch (error: any) {
      Swal.fire('Error', error.response.data.description, 'error');
    }
  }

}
