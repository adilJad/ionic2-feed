import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PostPage } from '../pages/post/post';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {FeedApi} from '../providers/feed-api';
import { AngularFireModule } from 'angularfire2';
import { ConnexionComponent } from '../components/connexion/connexion';

const config = {
    apiKey: "AIzaSyBxSbIL75PY_KII0eYrsMpvGM--nZy5SHQ",
    authDomain: "feed-24e91.firebaseapp.com",
    databaseURL: "https://feed-24e91.firebaseio.com",
    storageBucket: "feed-24e91.appspot.com",
    messagingSenderId: "978920448289"
};

@NgModule({
  declarations: [
    MyApp,
    PostPage,
    HomePage,
    TabsPage,
    ConnexionComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, FeedApi]
})
export class AppModule {}
