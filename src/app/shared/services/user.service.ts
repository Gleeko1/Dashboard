import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Info, Name, Result, RootObject } from '../models/user.interface';

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
