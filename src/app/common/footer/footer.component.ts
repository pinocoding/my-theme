import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  latestarticles,
  tagclouds,
  follows,
  aboutinfos,
  titleLists,
} from '../../models/mockup-data.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  latestarticles = latestarticles;
  tagclouds = tagclouds;
  follows = follows;
  aboutinfos = aboutinfos;
  titleLists = titleLists;

  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}
}
