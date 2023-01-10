import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../../models/card';

@Injectable()
export class ReadingService {
  constructor(private http: HttpClient) {}
  apiUrl = 'assets/readings.json';
  getReadingsList() {
    return this.http
      .get<any>(this.apiUrl)
      .toPromise()
      .then((res) => <Card[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
