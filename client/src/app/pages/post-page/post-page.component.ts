import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../shared/posts.service';
import {Observable} from 'rxjs';
import {Post} from '../../shared/interfaces';
import {switchMap} from 'rxjs/operators';
import {loadConfigurationFromPath} from "tslint/lib/configuration";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;
  loader: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.loader = true;
    this.post$ = this.route.params.pipe(switchMap((params: Params)=> {
      const postById = this.postsService.getById(params['id']);
      this.loader = false;
      return postById;
    }))
  }

}
