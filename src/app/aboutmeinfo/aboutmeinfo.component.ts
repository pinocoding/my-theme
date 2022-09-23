import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutmeinfo',
  templateUrl: './aboutmeinfo.component.html',
  styleUrls: ['./aboutmeinfo.component.scss'],
})
export class AboutmeinfoComponent implements OnInit {
  @Input() avatar = ''; // decorate the property with @Input()
  ngOnInit(): void {}
}
