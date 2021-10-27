import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent implements OnInit {

  //#region variables
  color="red";
//#endregion
  constructor() { }

  ngOnInit(): void {
  }

}
