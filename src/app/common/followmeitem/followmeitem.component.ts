import { Component, OnInit, Input } from '@angular/core';
import { Follow } from '../../models/mockup-data.model';
@Component({
  selector: 'app-followmeitem',
  templateUrl: './followmeitem.component.html',
  styleUrls: ['./followmeitem.component.scss'],
})
export class FollowmeitemComponent implements OnInit {
  @Input() follow: Follow;
  constructor() {}

  ngOnInit(): void {}
}
