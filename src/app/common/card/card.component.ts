import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() rowDataImg: '';
  @Input() rowDataTitle: '';
  @Input() rowDataDate: '';
  @Input() rowDataText: '';
  @Input() rowDataIconTag: '';
  @Input() rowDataTagOne: '';
  @Input() rowDataTagTwo: '';
  @Input() rowDataAvt: '';
  @Input() rowDataName: '';


  @Input() rowDataTimeRead: '';
  @Input() rowDataComments: '';
  @Input() rowDataViews: '';
  @Input() rowDataClass: '';





  constructor() {}

  ngOnInit(): void {}
}
