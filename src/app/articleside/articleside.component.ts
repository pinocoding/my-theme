import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articleside',
  templateUrl: './articleside.component.html',
  styleUrls: ['./articleside.component.scss'],
})
export class ArticlesideComponent implements OnInit {
  title = 'Recent posts';
  imgTree = 'tree.jpg';
  imgMan = 'man.jpg';
  imgWomen = 'woman.jpg';
  imgGirl = 'girl.jpg';
  treeText = 'Far far away, behind the word mountains';
  manText = 'The spectacle before us was indeed sublime';
  womenText = 'Musical improvisation is the spontaneous music';
  girlText = 'The meaning of health has evolved over time';

  treeDate = 'August 15, 2019 ';
  manDate = 'July 26, 2019 ';
  womenDate = ' August 15, 2019 ';

  ngOnInit(): void {}
}
