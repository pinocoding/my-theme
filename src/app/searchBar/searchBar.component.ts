import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReadingService } from '../common/services/readingservice';
import { Card } from '../models/card';

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() toggleSearchBarbarForMe: EventEmitter<any> = new EventEmitter();
  @Input() opened: boolean;
  cards: Card[];

  constructor(private readingservice: ReadingService) {}

  ngOnInit() {
    this.readingservice.getReadingsList().then((cards) => {
      this.cards = cards;
    });
  }
  // Get data input to filter
  getEventValue($event: any) {
    return $event.target.value;
  }
  // Open the search bar
  toggleSidebar() {
    this.toggleSearchBarbarForMe.emit();
  }
}
