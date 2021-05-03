import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {NotesService} from "../../../../services/notes.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-dialog-create-note',
  templateUrl: './dialog-create-note.component.html',
  styleUrls: ['./dialog-create-note.component.css']
})
export class DialogCreateNoteComponent {

  isLoading = false;

  practitioner: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog,
              private noteServie: NotesService,
              private snack: MatSnackBar) {
    this.practitioner = ['doctor', 'nutritionist'];
  }


  public closeDialog(): void {
    this.dialog.closeAll();
  }

  saveNote(note: string): void {
    this.isLoading = true;
    this.noteServie.saveNote(this.data.idPatient,'doctor',note).then(value => {
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

}
