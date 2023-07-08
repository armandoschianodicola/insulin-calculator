import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  public apiUrl: string = 'https://armoschiano.pythonanywhere.com'; //develop
  // public localApiUrl: string = 'https://192.168.1.61:8000'; //develop
  public localApiUrl: string = 'http://127.0.0.1:8000'; //develop

  constructor() {}

  getRootUrl(): string {
    return this.apiUrl;
  }

  getLocalRootUrl(): string {
    return this.localApiUrl;
  }
  
}