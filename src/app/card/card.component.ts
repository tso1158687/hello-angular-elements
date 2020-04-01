import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() triggerEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  triggerOutputEvent() {
    const message = 'click button and trigger output event';
    console.log(message);
    this.triggerEvent.emit(message);
  }
}
