import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentRouter: any;
  searchBarOpen = false;
  sideBarOpen = false;
  searchBarOpened = false;
  opened = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    this.opened = !this.opened;
  }
  searchBarToggler() {
    this.searchBarOpen = !this.searchBarOpen;
    this.searchBarOpened = !this.searchBarOpened;
  }
  constructor(router: Router) {
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentRouter = e.url;
      });
  }
  ngOnInit() {}
}
