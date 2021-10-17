import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Info, Name, Result, RootObject } from '../shared/models/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user!: Result;
  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }
  reload(){
    window.location.reload();
  }

}
