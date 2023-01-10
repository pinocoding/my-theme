import { Component, OnInit } from '@angular/core';
import { aboutinfos, latestarticles } from '../models/mockup-data.model';

@Component({
  selector: 'app-authorpage',
  templateUrl: './authorpage.component.html',
  styleUrls: ['./authorpage.component.scss'],
})
export class AuthorpageComponent implements OnInit {
  latestarticles = latestarticles;
  aboutinfos = aboutinfos;
  sideBarOpen = false;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor() {}

  ngOnInit() {}
}
