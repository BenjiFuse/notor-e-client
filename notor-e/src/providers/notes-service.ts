import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Note} from '../app/note';

@Injectable()
export class NotesService {
  notesUrl = "http://localhost:8000/api/notes"

  constructor(public http: Http) {}
    
  // Loads all notes for the current user:
  load(): Observable<Note[]> {
    return this.http.get(this.notesUrl)
  	           .map(res => res.json())
  	           .catch(this.handleError);
  }

  // Add a note-edit
  add(note: string): Observable<Note> {
  	let body = JSON.stringify({text: note, user_id: 1});		// [!] UPDATE FOR BY-USER ADD
  	let headers = new Headers({'Content-Type': 'application/json'});

  	var temp = this.http.post(this.notesUrl, body, {headers: headers})
  				 	.map(res => res.json())
  				 	.catch(this.handleError);

  	return temp;
  }

  // Update a given note
  update(note: Note) {
  	let url = `${this.notesUrl}/${note.id}`;
  	let body = JSON.stringify(note);
  	let headers = new Headers({'Content-Type': 'application/json'});

  	return this.http.put(url, body, {headers: headers})
  					.map(() => note)
  					.catch(this.handleError);
  }

  // Delete a given note
  delete(note: Note) {
  	let url = `${this.notesUrl}/${note.id}`;
  	let headers = new Headers({'Content-Type': 'application/json'});

  	return this.http.delete(url, headers)
  					.catch(this.handleError);
  }

  // Logs the given error to the console and returns an observable error
  handleError(error) {
  	console.error(error);
  	return Observable.throw(error.json().error || 'Server error');
  }

}
