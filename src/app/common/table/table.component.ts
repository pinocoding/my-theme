import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../common/table/table.service';
import { cards } from '../../models/mockup-data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  cards = cards;

  books: Book[];

  cols: any[];

  totalRecords: number;

  constructor(private bookService: BookService) {}

  getCards(): void {}

  ngOnInit() {
    // this.bookService.getBooks().then((books) => (this.books = books));
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
        class: 'class'
      },
    ];
    this.totalRecords = this.cols.length;
  }
}
