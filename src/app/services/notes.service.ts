import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, Subscription} from "rxjs";
import {environment} from "../../environments/environment";
import {Note} from "../model/note.model";

@Injectable({providedIn: "root"})
export class NotesService {

  private subcriptionNotePatient$: Subscription;
  subjectNote$: Subject<Note[]>;

  constructor(private http: HttpClient) {
    this.subjectNote$ = new Subject<Note[]>();
    this.subcriptionNotePatient$=new Subscription();
  }

  saveNote(note: Note): Observable<Note> {
    let host = environment.note;
    return this.http.post<Note>(host + '/patHistory/add', note);
  }

  getNotePatient(id: number): Subscription{
    let host = environment.note;
    return this.subcriptionNotePatient$=this.http.get<Note[]>(host + '/patHistory/' + id)
      .subscribe(note=>
      {
        this.subjectNote$.next(note);
      });
  }

  updateNotePatient(note: Note) {
    let host = environment.note;
    return this.http.put<Note>(host + '/patHistory/' + note.id, note);
  }


}
