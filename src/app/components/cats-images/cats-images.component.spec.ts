import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsImagesComponent } from './cats-images.component';

describe('CatsImagesComponent', () => {
  let component: CatsImagesComponent;
  let fixture: ComponentFixture<CatsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
