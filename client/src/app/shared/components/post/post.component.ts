import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @ViewChild('card') card: ElementRef;

  @HostListener('mouseover', ['$event']) onHover(event: Event) {
    this.card.nativeElement.querySelector('p').style.display = 'none';
    this.card.nativeElement.querySelector('img').style.display = 'block';
  }
  @HostListener('mouseout', ['$event']) onHoverOut(event: Event) {
    this.card.nativeElement.querySelector('p').style.display = 'block';
    this.card.nativeElement.querySelector('img').style.display = 'none';
  }
  constructor() { }

  ngOnInit() {

  }
}
