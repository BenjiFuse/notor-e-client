import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes-service';
import { Note } from '../../app/note';


@Component({
  selector: 'page-note-edit',
  templateUrl: 'note-edit.html',
  providers: [NotesService]
})
export class NoteEditPage {
	public note: Note;
	public notes: Note[];
	public index: number;

	constructor(public notesService: NotesService, public navCtrl: NavController, public navParams: NavParams) {
		this.note = navParams.get('note');
		this.notes = navParams.get('notes');
		this.index = navParams.get('index');
	}

	saveNote(updatedText: string) {
		this.note.text = updatedText;
		this.notesService.update(this.note)
			.subscribe(res => {
				this.navCtrl.pop();		// go back to note list (pop current from view stack)
			});
	}

	deleteNote() {
		this.notesService.delete(this.note)
			.subscribe(res => {
				this.notes.splice(this.index, 1);
				this.navCtrl.pop();
			});
	}
}
