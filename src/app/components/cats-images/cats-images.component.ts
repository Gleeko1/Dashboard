import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats-images',
  templateUrl: './cats-images.component.html',
  styleUrls: ['./cats-images.component.css']
})
export class CatsImagesComponent implements OnInit {
  @Input() cat: any;
  constructor() { }

  ngOnInit(): void {
  }

}
