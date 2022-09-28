import { Component, OnInit } from '@angular/core';
import { aboutinfos } from '../../models/mockup-data.model';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit {
  aboutinfos = aboutinfos;
  title = 'About me';
  ngOnInit(): void {}
}
