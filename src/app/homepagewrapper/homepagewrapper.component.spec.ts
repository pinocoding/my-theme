import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagewrapperComponent } from './homepagewrapper.component';

describe('HomepagewrapperComponent', () => {
  let component: HomepagewrapperComponent;
  let fixture: ComponentFixture<HomepagewrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagewrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagewrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
