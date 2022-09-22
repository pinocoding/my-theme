import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articlecart',
  templateUrl: './articlecart.component.html',
  styleUrls: ['./articlecart.component.scss'],
})
export class ArticlecartComponent implements OnInit {
  currentItem = 'Latest Articles';
  ngOnInit(): void {}
}
