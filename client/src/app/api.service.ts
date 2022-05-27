import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private apiRoot = 'http://127.0.0.1:8000/api/text';

  constructor(private http: HttpClient) {}

  getMain() {
    return this.http.get(this.apiRoot.concat(''));
  }
}
