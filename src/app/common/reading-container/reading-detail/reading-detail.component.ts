import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Card } from '../../../models/card';
import { ReadingService } from '../../services/readingservice';

@Component({
  selector: 'app-reading-detail',
  templateUrl: './reading-detail.component.html',
  styleUrls: ['./reading-detail.component.scss'],
})
export class ReadingDetailComponent implements OnInit {
  cards: Card[];
  readingNumber: number;
  find_object: any;

  constructor(private readingservice: ReadingService, router: Router) {
    // Get number in the end of router
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.readingNumber = Number(e.url.toString().slice(-1));
      });
  }

  ngOnInit() {
    this.readingservice.getReadingsList().then((cards) => {
      this.cards = cards;
      this.getDimensions(this.readingNumber);
    });
  }

  // find the readingNumber passed with the id in the object
  getDimensions(readingNumber: number) {
    this.find_object = this.cards.find((x) => x.id === readingNumber);
  }
}
