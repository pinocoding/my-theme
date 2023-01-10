import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Input() opened: boolean;
  constructor() {}

  items: MenuItem[];

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
}
