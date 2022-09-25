import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisingside',
  templateUrl: './advertisingside.component.html',
  styleUrls: ['./advertisingside.component.scss'],
})
export class AdvertisingsideComponent implements OnInit {
  title = 'Advertising';
  avatar = 'avatar.jpg';

  ngOnInit(): void {}
}
