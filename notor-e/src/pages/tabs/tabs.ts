import { Component } from '@angular/core';

// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';


import { NotesPage } from '../notes/notes';
import { ProfilePage } from '../profile/profile';
import { SharesPage } from '../shares/shares';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  //tab1Root: any = HomePage;
  //tab2Root: any = AboutPage;
  //tab3Root: any = ContactPage;

  tab4Root: any = ProfilePage;
  tab5Root: any = NotesPage;
  tab6Root: any = SharesPage;

  constructor() {

  }
}
