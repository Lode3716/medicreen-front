import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {PatientsService} from "../../../services/patients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotesService} from "../../../services/notes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {DialogCreateNoteComponent} from "./dialog-create-note/dialog-create-note.component";
import {MatDialog} from "@angular/material/dialog";
import {Overlay,} from "@angular/cdk/overlay";
import {DialogEditNoteComponent} from "./dialog-edit-note/dialog-edit-note.component";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
@Injectable()
export class NoteEditComponent implements OnInit {

  patientFormGroup?: FormGroup;
  noteSubject: Subscription;
  patientId: number;
  servicePatient: string[];

  isLoading: boolean;

  @ViewChild(DialogCreateNoteComponent)
  dialogComponent: DialogCreateNoteComponent

  constructor(private activatedRoute: ActivatedRoute,
              private patientService: PatientsService,
              public noteService: NotesService,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private overlay: Overlay) {
    this.patientId = activatedRoute.snapshot.params.id;
    this.servicePatient = [];
    this.isLoading=true;
  }

  ngOnInit(): void {
    this.patientService.getPatient(this.patientId)
      .subscribe(patient => {
        this.patientFormGroup = this.fb.group({
          id: [patient.id],
          lastName: [patient.lastName, Validators.required],
          firstName: [patient.firstName, Validators.required]
        })
      });

    this.noteSubject = this.noteService.getNotePatient(this.patientId);

  }


  createNote(): void {
    this.isLoading=false;
    const ref = this.dialog.open(DialogCreateNoteComponent, {
        data: {
          // tslint:disable-next-line:radix
          idPatient: this.patientId,
        },
        hasBackdrop: false,
        closeOnNavigation: false,
        disableClose: true,
        position: {
          bottom: '1em',
          right: '1em'
        },
        panelClass: 'dialog-popup',
        autoFocus: false,
        scrollStrategy: this.overlay.scrollStrategies.noop()
      }
    )
    ref.afterClosed()
      .subscribe(value => {
       this.noteSubject = this.noteService.getNotePatient(this.patientId);
       this.isLoading=true;
      })
  }


  public editNote(note: any): void {
    this.isLoading=false;
    const editNote = Object.assign({}, note)

    const ref = this.dialog.open(DialogEditNoteComponent, {
        data: {
          note: editNote
        },
        hasBackdrop: false,
        closeOnNavigation: false,
        disableClose: true,
        position: {
          bottom: '1em',
          right: '1em'
        },
        panelClass: 'dialog-popup',
        autoFocus: false,
        scrollStrategy: this.overlay.scrollStrategies.noop()
      }
    )

    ref.afterClosed()
      .subscribe(value => {
        this.noteSubject = this.noteService.getNotePatient(this.patientId);
        this.isLoading=true;
      })
  }
}
