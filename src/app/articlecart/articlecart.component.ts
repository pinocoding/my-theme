import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articlecart',
  templateUrl: './articlecart.component.html',
  styleUrls: ['./articlecart.component.scss'],
})
export class ArticlecartComponent implements OnInit {
  title = 'Latest Articles';
  imgTree = 'tree.jpg';
  imgMan = 'man.jpg';
  imgWomen = 'woman.jpg';
  treeText = 'Far far away, behind the word mountains';
  manText = 'The spectacle before us was indeed sublime';
  womenText = 'Musical improvisation is the spontaneous music';

  treeDate = 'August 15, 2019 ';
  manDate = 'July 26, 2019 ';
  womenDate = ' August 15, 2019 ';
  ngOnInit(): void {}
}
