// ng g c component-name
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "";
  public myId = "testId"
  public myId1 = "testId1"
  public isDisabled = true;
  constructor() {
  }

  ngOnInit(): void {
  }

  greetUser(name: string): string {
    return "hello " + name;
  }

  logMessage(message:string): void {
    console.log(message);
  }

  onClick(): void {
    //console.log('test click event');
    console.log('click event');
  }
}
