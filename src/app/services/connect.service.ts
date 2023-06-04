import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  public apiUrl: string = 'http://armoschiano.pythonanywhere.com'; //develop

  constructor() {}

  getRootUrl(): string {
    return this.apiUrl;
  }
}