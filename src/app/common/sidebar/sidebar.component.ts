import { Component, OnInit } from '@angular/core';
import {
  latestarticles,
  tagclouds,
  follows,
  aboutinfos,
  titleLists,
} from '../../models/mockup-data.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  titleLists = titleLists;
  latestarticles = latestarticles;
  constructor() {}

  ngOnInit(): void {}
}
