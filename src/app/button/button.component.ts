import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  label: string;
  @Output()
  clickEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickEvent() {
    console.log('call onClickEvent');
    this.clickEvent.emit(this.label);
  }
}
