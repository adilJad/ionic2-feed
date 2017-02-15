import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

/*
  Generated class for the FeedApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FeedApi {
  posts: FirebaseListObservable<any>;
  constructor(public af: AngularFire) {
    this.posts = af.database.list('/posts');
  }
  get Posts() {
    return this.posts;
  }

  addPost(post) {
    this.af.database.list('/posts').push(post);
  }

}
