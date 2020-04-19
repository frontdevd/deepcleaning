import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {log} from "util";
import {Renderer} from "@angular/compiler-cli/ngcc/src/rendering/renderer";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
             selector: 'app-main-layout',
             templateUrl: './main-layout.component.html',
             styleUrls: ['./main-layout.component.scss']
           })


export class MainLayoutComponent implements OnInit, OnDestroy {

  isMobile: boolean = false;
  toogle: boolean = false;
  phoneNumber: string = '+12345678910';

  logo: string = '/assets/images/logo.svg';
  url;

  @ViewChild('headerScrolling') headerScrolling: ElementRef;
  @HostListener('scroll', ['$event.target']) onScrollEvent(event: Event) {
    let win = window.pageYOffset;
    if (win >= 500) {
      this.headerScrolling.nativeElement.classList.add('header-white');
      this.logo = '/assets/images/logo-m.svg';
    } else {
      this.headerScrolling.nativeElement.classList.remove('header-white');
      this.logo = '/assets/images/logo.svg';
    }
  }


  constructor(private router: Router,
              public _data: DataService

  ) {}

  ngOnInit() {
    this.url = this.router.url;
    this.checkHeader();
    document.body.className = '';
    document.body.className = this.url.replace('/', '');
  }

  checkHeader() {
    let winWidth = window.innerWidth;
    if (winWidth <= 991) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  onResize($event: any) {
    this.checkHeader();
  }

  showMenu() {
    this.toogle = !this.toogle;
  }

  changeBodyBg (str: string) {
    document.body.className = '';
    document.body.classList.add(str);
  }
  onScrollTop() {
    window.scrollTo(0,0);
    // window.scrollTop = 100; // safari
  }

  ngOnDestroy() {
    document.body.className = '';
  }




}
