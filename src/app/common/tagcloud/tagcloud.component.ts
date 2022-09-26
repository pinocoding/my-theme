import { Component, OnInit, Input } from '@angular/core';
import {tagclouds} from "../../models/data.model"
@Component({
  selector: 'app-tagcloud',
  templateUrl: './tagcloud.component.html',
  styleUrls: ['./tagcloud.component.scss'],
})
export class TagcloudComponent implements OnInit {


  tagclouds = tagclouds
  title = 'Tag Cloud';
  constructor() {}

  ngOnInit(): void {}
}
