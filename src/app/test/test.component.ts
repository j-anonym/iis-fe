import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  data = {};

  constructor(private ts:TestService) { }

  ngOnInit() {
    console.log("hello!");
    this.foo();
    this.ts.getAllUsers().subscribe(data => {
      console.log(data);
    });
    console.log(this.data);
  }

  foo(){
    console.log("test");
  }

}
