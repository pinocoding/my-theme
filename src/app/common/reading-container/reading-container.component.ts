import { Component, OnInit } from '@angular/core';
import { Card } from './../../models/card';
import { ReadingService } from '../services/readingservice';

@Component({
  selector: 'app-reading-container',
  templateUrl: './reading-container.component.html',
  styleUrls: ['./reading-container.component.scss'],
})
export class ReadingContainerComponent implements OnInit {
  cards: Card[];
  cols: any[];
  totalRecords: number;

  getCards(): void {}
  constructor(private readingservice: ReadingService) {}

  ngOnInit() {
    this.readingservice.getReadingsList().then((cards) => {
      this.cards = cards;
    });

    this.cols = [
      {
        date: 'date',
        id: 'id',
        title: 'title',
        img: 'img',
        text: 'text',
        link: 'link',
        icon: 'icon',
        tagOne: 'tagOne',
        tagTwo: 'tagTwo',
        avatar: 'avatar',
        name: 'name',
        timeRead: 'timeRead',
        comments: 'comments',
        views: 'views',
        class: 'class',
      },
    ];
    this.totalRecords = this.cols.length;
  }
}
