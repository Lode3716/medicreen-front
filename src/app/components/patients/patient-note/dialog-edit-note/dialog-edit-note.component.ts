import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {NotesService} from "../../../../services/notes.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-dialog-edit-note',
  templateUrl: './dialog-edit-note.component.html',
  styleUrls: ['./dialog-edit-note.component.css']
})
export class DialogEditNoteComponent implements OnInit {
  isLoading: Boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog,
              private noteServie: NotesService,
              private snack: MatSnackBar) {
    this.isLoading=false;
  }

  ngOnInit(): void {
  }

  updateNote(updateNote: string) {

    this.data.note.note =updateNote;
    this.isLoading=true;

    this.noteServie.updateNotePatient(this.data.note)
      .then(value => {
        this.snack.open('Notes Saved', 'Closed', {
          horizontalPosition: environment.snackbar.horizontalPosition,
          verticalPosition: environment.snackbar.verticalPosition,
          duration: 2000
        }).afterOpened().subscribe(() => this.closeDialog())
      })
      .catch(reason => {
        this.snack.open('Unable to save note : ' + reason.toString(), 'Closed', {
          horizontalPosition: environment.snackbar.horizontalPosition,
          verticalPosition: environment.snackbar.verticalPosition,
          duration: 2000
        })
      }).finally(() => this.isLoading = false);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
