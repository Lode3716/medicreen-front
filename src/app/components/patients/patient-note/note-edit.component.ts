import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {PatientsService} from "../../../services/patients.service";
import {ActivatedRoute} from "@angular/router";
import {NotesService} from "../../../services/notes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {DialogCreateNoteComponent} from "./dialog-create-note/dialog-create-note.component";
import {MatDialog} from "@angular/material/dialog";
import {Overlay,} from "@angular/cdk/overlay";
import {DialogEditNoteComponent} from "./dialog-edit-note/dialog-edit-note.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmationDialogService} from "../../utils/dialog-confirmationlog/ConfirmationDialogService";
import {RapportService} from "../../../services/rapport.service";

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

  rapportFormGroup?: FormGroup;

  isLoading: boolean;

  color: string = '';

  @ViewChild(DialogCreateNoteComponent)
  dialogComponent: DialogCreateNoteComponent

  constructor(private activatedRoute: ActivatedRoute,
              private patientService: PatientsService,
              private rapportService: RapportService,
              public noteService: NotesService,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private overlay: Overlay,
              private snack: MatSnackBar,
              private confirmationDialogService: ConfirmationDialogService) {
    this.patientId = activatedRoute.snapshot.params.id;
    this.servicePatient = [];
    this.isLoading = true;
    this.color = '';
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

    this.updateRapport();
  }


  createNote(): void {
    this.isLoading = false;
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
        this.updateRapport();
        this.isLoading = true;
      })
  }


  public editNote(note: any): void {
    this.isLoading = false;
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
        this.updateRapport();
        this.isLoading = true;
      })
  }

  public closeDialog(): void {
    this.dialog.closeAll();
  }

  updateRapport() {
    this.noteSubject = this.noteService.getNotePatient(this.patientId);
    this.rapportService.getRapport(this.patientId)
      .subscribe(rapport => {
        this.rapportFormGroup = this.fb.group({
          age: [rapport.age, Validators.required],
          level: [rapport.level, Validators.required]
        })
        this.color = this.rapportFormGroup.value.level
      });

  }

  deleteNote(idNote: string): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you want to delete this note ?')
      .then((confirmed) => {
        if (confirmed == true) {
          this.noteService.deleteNotePatient(idNote)
            .then(value => {
              this.snack.open('Note delete', '', {
                duration: 1000
              }).afterOpened().subscribe(() => this.closeDialog())
            })
            .catch(reason => {
              this.snack.open('Unable to delete note : ' + reason.toString(), '', {
                duration: 1000
              })
            }).finally(() =>
          {
            this.updateRapport();
          }
          )}
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  getColor() {
    if (this.color == 'none') {
      return '#007bff';
    }
    if (this.color == 'borderline') {
      return '#17a2b8';
    }
    if (this.color == 'in danger') {
      return 'orange';
    }
    if (this.color == 'early onset') {
      return '#dc3545';
    }
  }
}
