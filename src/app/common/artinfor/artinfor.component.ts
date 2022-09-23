import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artinfor',
  templateUrl: './artinfor.component.html',
  styleUrls: ['./artinfor.component.scss'],
})
export class ArtinforComponent implements OnInit {
  @Input() img = ''; // decorate the property with @Input()
  @Input() text = ''; // decorate the property with @Input()
  @Input() date = ''; // decorate the property with @Input()

  ngOnInit(): void {}
}
