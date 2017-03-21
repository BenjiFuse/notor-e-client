import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
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

  handleError(error) {
  	console.error(error);
  	return Observable.throw(error.json().error || 'Server error');
  }

}
