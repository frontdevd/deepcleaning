import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../shared/posts.service";

@Component({
   selector: 'app-service',
   templateUrl: './service.component.html',
   styleUrls: ['./service.component.scss']
 })
export class ServiceComponent implements OnInit {
  posts$: Observable<Post[]>;
  loader: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}


  ngOnInit() {
    this.loader = true;
    this.posts$ = this.postsService.getAll();
    setTimeout(() => this.loader = false, 500)
  }

  al(event) {
    alert()
  }
}
