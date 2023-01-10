import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss'],
})
export class ContactpageComponent implements OnInit {
  overlays: any[];
  options: any;
  sideBarOpen = false;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      messages: new FormControl(''),
    });
  }

  ngOnInit() {
    this.options = {
      center: { lat: 10.8538211, lng: 106.6278284 },
      zoom: 12,
    };
  }
}
