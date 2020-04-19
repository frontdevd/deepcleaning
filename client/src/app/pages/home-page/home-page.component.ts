import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../shared/data.service";

@Component({
             selector: 'app-home-page',
             templateUrl: './home-page.component.html',
             styleUrls: ['./home-page.component.scss']
           })
export class HomePageComponent implements OnInit {

  isAdmin: boolean = false;
  showModal: boolean = false;
  content: string = 'home';
  contentModal: string = 'modal';
  texts:any;
  // @Input() contactContent;

  constructor(private data: DataService) {}

  ngOnInit() {
    let getToken = localStorage.getItem('fb-token');
    (getToken) ? this.isAdmin = true : false;

    this.texts = this.data.contactInformation().page;
  }

  openModal(event: Event) {
    this.showModal = true;
  }

  closeModal(event: Event) {
    this.showModal = false;
  }

}
