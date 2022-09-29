import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Input() opened: boolean;
  constructor() {}

  items: MenuItem[] | any;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        items: [
          {
            label: 'New',

            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Header Styles',

        items: [
          {
            label: 'New',

            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Post Features',

        items: [
          {
            label: 'New',

            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: '#Tag',

        items: [
          {
            label: 'New',

            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Author',
      },

      {
        label: 'Features',

        items: [
          {
            label: 'New',

            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Contact',
      },
    ];
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
