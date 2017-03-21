import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes-service';
import { Note } from '../../app/note';


@Component({
  selector: 'page-notes',
  templateUrl: 'notes-page.html',
  providers: [NotesService]
})
export class NotesPage {

  public notes: Note[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public notesService : NotesService) {
    this.loadNotes();

    this.notes = [new Note({_id: 1, text: 'hello world', archived: false, user_id: 2})];
  }

  loadNotes() {
    this.notesService.load()
      .subscribe(data => {
        this.notes = data;
      })
  }

}
