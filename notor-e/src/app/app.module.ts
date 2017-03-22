import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Pages:
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NotesPage } from '../pages/notes-page/notes-page';
import { ProfilePage } from '../pages/profile/profile';
import { SharesPage } from '../pages/shares/shares';
import { NoteEditPage } from '../pages/note-edit/note-edit';

import { AuthHttp , AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
//    headerPrefix: USER_TOKEN,
    globalHeaders: [{'Accept': 'application/json'}],
    noJwtError: true,
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProfilePage,
    NotesPage,
    SharesPage,
    NoteEditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProfilePage,
    NotesPage,
    SharesPage,
    NoteEditPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ]
})
export class AppModule {}
