import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedApi } from '../../providers/feed-api';
// import {ConnexionComponent} from '../../components/connexion/connexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any = [];
  constructor(public navCtrl: NavController, public feedApi: FeedApi) {
    this.posts = feedApi.posts;
  }

}
