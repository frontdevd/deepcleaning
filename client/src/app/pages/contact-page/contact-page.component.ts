import {Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../shared/posts.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contact} from "../../shared/interfaces";
// import {DOCUMENT} from "@angular/common";
// import {Router} from "@angular/router";
import {DataService} from "../../shared/data.service";
import {OwlDateTimeIntl} from "ng-pick-datetime";

@Component({
   selector: 'app-contact-page',
   templateUrl: './contact-page.component.html',
   styleUrls: ['./contact-page.component.scss']
 })
export class ContactPageComponent implements OnInit, OnDestroy   {
  @Output() onHide  = new  EventEmitter<boolean>();
  @Input() onContent;
  @Input() onShow;

  form: FormGroup;
  isSelect:boolean = true;
  texts: any;
  content:string;



  constructor(  private postsService: PostsService,
                private http: HttpClient,
                public _data: DataService) {
  }

  ngOnInit() {


    if(this.onContent === undefined) {
      this.content = 'contact';
      this.texts = this._data.contactInformation().page;
    } else if (this.onContent === 'home')  {
      this.content = this.onContent;
      this.texts = this._data.contactInformation().home;
    } else {
      this.content = this.onContent;
      this.texts = this._data.contactInformation().modal;
    }
    console.log( this.content )
    console.log( this.texts )


    this.form = new FormGroup({
      service: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{11}")]),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      datepicker: new FormControl(null, Validators.required),
    })
  }

  submit(event: Event) {
    if (this.form.invalid) {
      return;
    }

    const contact: Contact = {
      service: this.form.value.service,
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      email: this.form.value.email,
      datepicker: this.form.value.datepicker,
    };

    let headers = new HttpHeaders({
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      });
    let options = {
      headers: headers
    };
    let data = {
      service: 'hghg',
      datepicker: '12 12 12',
    };


    this.http.post('/api/email/send', data, options)
    .subscribe(data => {
      console.log(data);
    });
  }

  close(event: Event) {
    this.onShow = false;
    this.onHide.emit(this.onShow)
  }

  ngOnDestroy() {
    // this.renderer.removeClass(this.document.body, this.router.url);
  }

}
