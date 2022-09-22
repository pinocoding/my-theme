import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-subcribe',
  templateUrl: './subcribe.component.html',
  styleUrls: ['./subcribe.component.scss'],
})
export class SubcribeComponent implements OnInit {
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  constructor(private primengConfig: PrimeNGConfig) {}
}
