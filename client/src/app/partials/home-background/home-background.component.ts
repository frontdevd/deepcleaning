import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
   selector: 'app-home-background',
   templateUrl: './home-background.component.html',
   styleUrls: ['./home-background.component.scss']
 })
export class HomeBackgroundComponent implements OnInit {
  modal: boolean = false;
  @Output() onModal = new  EventEmitter<boolean>();
  constructor() {}

  ngOnInit(){}

  openOrder() {
   this.modal = true;
   this.onModal.emit(this.modal);
  }
}
