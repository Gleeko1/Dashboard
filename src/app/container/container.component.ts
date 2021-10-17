import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject, Result } from '../shared/models/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser().subscribe((data:any) => {
      console.log(data)
      this.user = data.results[0]
      }
    );
    
    
  }

}
