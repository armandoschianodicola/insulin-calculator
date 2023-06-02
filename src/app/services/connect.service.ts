import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  public apiUrl: string = 'http://127.0.0.1:8000'; //develop

  constructor() {}

  getRootUrl(): string {
    return this.apiUrl;
  }
}