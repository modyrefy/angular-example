import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees=[
    {"id":1,name:"employee-1",age:35 },
    {"id":2,name:"employee-2",age:55 },
    {"id":3,name:"employee-3",age:45 },
    {"id":4,name:"employee-4",age:28 }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
