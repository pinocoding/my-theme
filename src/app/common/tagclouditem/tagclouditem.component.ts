import { Component, OnInit, Input } from '@angular/core';
import { TagCloud } from '../../models/data.model';
@Component({
  selector: 'app-tagclouditem',
  templateUrl: './tagclouditem.component.html',
  styleUrls: ['./tagclouditem.component.scss'],
})
export class TagcloudItemComponent implements OnInit {
  @Input() tagcloud: TagCloud;

  constructor() {}

  ngOnInit(): void {}
}
