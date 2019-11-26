import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projekt';
  data = 'test';
  arr = [];
  decide = false;

  logged = false;

  ngOnInit() {
    console.log('hello!');
    this.arr.push('jedna');
    this.arr.push('dva');
  }

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }
}
