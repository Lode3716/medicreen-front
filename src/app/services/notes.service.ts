import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject, Subscription} from "rxjs";
import {environment} from "../../environments/environment";
import {Note} from "../model/note.model";


@Injectable({providedIn: "root"})
export class NotesService {

  private subcriptionNotePatient$: Subscription;
  subjectNote$: Subject<Note[]>;

  constructor(private http: HttpClient) {
    this.subjectNote$ = new Subject<Note[]>();
    this.subcriptionNotePatient$ = new Subscription();
  }

  saveNote(idPatient: number, _practitioner: string, _note: string): Promise<any> {
    let host = environment.note;
    console.log("save note module " + _note + " / idPatient : " + idPatient + " / pratictionner : " + _practitioner);
    const not = {
      idPatient: idPatient,
      practitioner: _practitioner,
      note: _note
    };

    return this.http.post<Note>(host + '/patHistory/add', JSON.stringify(not), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).toPromise();
  }

  getNotePatient(id: number): Subscription {
    let host = environment.note;
    return this.subcriptionNotePatient$ = this.http.get<Note[]>(host + '/patHistory/' + id)
      .subscribe(note => {
        this.subjectNote$.next(note);
      });
  }

  updateNotePatient(note: Note): Promise<any> {
    let host = environment.note;
    return this.http.put<Note>(host + '/patHistory/' + note.id, JSON.stringify(note), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).toPromise();
  }


}
