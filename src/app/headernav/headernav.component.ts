import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.scss'],
})
export class HeadernavComponent implements OnInit {
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
}
