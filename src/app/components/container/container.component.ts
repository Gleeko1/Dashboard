import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGetService } from 'src/app/shared/services/api-get.service';
import { RootObject, Result } from '../../shared/models/user.interface';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  user: any;
  cat: any;
  constructor(private userService: UserService, private apiGetService: ApiGetService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser().subscribe((data:any) => {
      console.log(data)
      this.user = data.results[0]
      }
    );
    this.cat = this.apiGetService.getCatData().subscribe((data:any) => {
      console.log(data);
      this.cat = data[0]
    })
    
  }

}
