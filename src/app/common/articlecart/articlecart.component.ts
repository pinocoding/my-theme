import { Component, OnInit } from '@angular/core';
import { latestarticles } from '../../models/mockup-data.model';
@Component({
  selector: 'app-articlecart',
  templateUrl: './articlecart.component.html',
  styleUrls: ['./articlecart.component.scss'],
})
export class ArticlecartComponent implements OnInit {
  latestarticles = latestarticles;

  title = 'Latest Articles';

  ngOnInit(): void {}
}
