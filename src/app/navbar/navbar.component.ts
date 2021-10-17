import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../shared/models/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() user!: Result;
  constructor() { }

  ngOnInit(): void {
  }

}
