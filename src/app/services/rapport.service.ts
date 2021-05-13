import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../model/patient.model";
import {environment} from "../../environments/environment";
import {Rapport} from "../model/rapport.model";

@Injectable({providedIn: "root"})
export class RapportService{

  constructor(private http: HttpClient) {
  }

  getRapport(id:number): Observable<Rapport> {
    let host = environment.rapport;
    return this.http.get<Rapport>(host + '/assess/'+id);
  }
}
