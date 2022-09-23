import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tagcloud',
  templateUrl: './tagcloud.component.html',
  styleUrls: ['./tagcloud.component.scss'],
})
export class TagcloudComponent implements OnInit {
  title = 'Tag Cloud';
  constructor() {}

  ngOnInit(): void {}
}
