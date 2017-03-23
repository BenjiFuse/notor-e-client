import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding, Item } from 'ionic-angular';
import { NoteEditPage } from '../note-edit/note-edit';
import { NotesService } from '../../providers/notes-service';
import { Note } from '../../app/note';


@Component({
  selector: 'page-notes',
  templateUrl: 'notes-page.html',
  providers: [NotesService]
})
export class NotesPage {

  public notes: Note[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public notesService : NotesService) {

    this.loadNotes();

    console.log(this.notes);

  }

  loadNotes() {
    this.notesService.load()
      .subscribe(notesList => {
        this.notes = notesList;
      });

  }

  addNote(note:string) {
    this.notesService.add(note)
        .subscribe(newNote => {
          this.notes.push(newNote)  // Push adds note to notes array already loaded in view
        });
  }

  toggleArchived(note: Note) {
    note.archived = !note.archived;
    this.notesService.update(note)
        .subscribe(updatedNote => {
          note = updatedNote;        // Update this notes data. No need to push, it's already in array
        });
  }

  deleteNote(note: Note, index:number) {
    this.notesService.delete(note)
        .subscribe(res => {
          this.notes.splice(index, 1);
        });
  }

  navToEdit(note: Note, index: number) {
    this.navCtrl.push(NoteEditPage, {
      note: note,
      notes: this.notes,
      index: index
    });
  }
}
