import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGetService {
  cats: any;

  constructor(private httpClient: HttpClient) { }

  getCatData(){
    return this.httpClient.get('https://api.thecatapi.com/v1/images/search')
  }
}
