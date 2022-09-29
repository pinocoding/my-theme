import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-headerlogo',
  templateUrl: './headerlogo.component.html',
  styleUrls: ['./headerlogo.component.scss'],
})
export class HeaderlogoComponent implements OnInit {
  @Input() toggleSidebarPlease: EventEmitter<any> = new EventEmitter();
  items: MenuItem[];

  ngOnInit() {}

  toggleSidebarMenu() {
    this.toggleSidebarPlease.emit();
  }
}
