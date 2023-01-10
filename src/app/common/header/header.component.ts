import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Output() toggleSearchBarbarForMe: EventEmitter<any> = new EventEmitter();
  @Input() opened: boolean;
  constructor(private router: Router) {}
  items: MenuItem[] | any;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: 'home',
      },
      {
        label: 'Author',
        routerLink: 'author',
      },

      {
        label: 'Contact',
        routerLink: 'contact',
      },
    ];
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  toggleSearchBar() {
    this.toggleSearchBarbarForMe.emit();
  }
}
