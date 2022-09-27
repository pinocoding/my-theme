import { Component, OnInit } from '@angular/core';
import { follows } from '../../models/mockup-data.model';
@Component({
  selector: 'app-followme',
  templateUrl: './followme.component.html',
  styleUrls: ['./followme.component.scss'],
})
export class FollowmeComponent implements OnInit {
  follows = follows;

  title = 'Follow me!';

  ngOnInit(): void {}
}
