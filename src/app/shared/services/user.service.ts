import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootObject!: RootObject;
  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<Object>{
     return this.httpClient.get<RootObject[]>('https://randomuser.me/api/');

    
  }
}
