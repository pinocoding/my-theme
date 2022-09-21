import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-headerlogo',
  templateUrl: './headerlogo.component.html',
  styleUrls: ['./headerlogo.component.scss'],
})
export class HeaderlogoComponent implements OnInit {
  items: MenuItem[] | any;

  ngOnInit() {}
}
