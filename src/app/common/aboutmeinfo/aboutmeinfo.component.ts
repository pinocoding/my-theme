import { Component, Input, OnInit } from '@angular/core';
import { AboutInfo } from '../../models/mockup-data.model';
@Component({
  selector: 'app-aboutmeinfo',
  templateUrl: './aboutmeinfo.component.html',
  styleUrls: ['./aboutmeinfo.component.scss'],
})
export class AboutmeinfoComponent implements OnInit {
  @Input() aboutinfo: AboutInfo; // decorate the property with @Input()
link: any;

  ngOnInit(): void {}
}
