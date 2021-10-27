import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input() public parentNameData = "";
  @Output() public chileEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  fireEvent(): void {
    this.chileEvent.emit('hey boy')
  }
}
