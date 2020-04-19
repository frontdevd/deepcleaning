import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../shared/posts.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  post: Post;
  submitted: boolean = false;
  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private alert: AlertService) {}

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params['id']);
      }))
      .subscribe((post: Post) => {
        this.post = post;
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          description: new FormControl(post.description, Validators.required),
          text: new FormControl(post.text, Validators.required),
          image: new FormControl(post.image, Validators.required)
        });
      });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    this.uSub = this.postsService.update({
      ...this.post,
       title: this.form.value.title,
       description: this.form.value.description,
       text: this.form.value.text,
       image: this.form.value.image
    }).subscribe(()=> {
      this.submitted = false;
      this.alert.success('post updated!')
    })
  }

  ngOnDestroy() {
    if(this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
