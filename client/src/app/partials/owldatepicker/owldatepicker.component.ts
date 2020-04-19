import { Component, OnInit } from '@angular/core';
import {OwlDateTimeIntl} from "ng-pick-datetime";

@Component({
  selector: 'app-owldatepicker',
  templateUrl: './owldatepicker.component.html',
  styleUrls: ['./owldatepicker.component.scss']
})
export class OwldatepickerComponent extends OwlDateTimeIntl {

  public cancelBtnLabel = 'Отменить';
  public setBtnLabel = 'Выбрать';

  constructor() {
    super();
  }
  ngOnInit(): void {
  }




}
