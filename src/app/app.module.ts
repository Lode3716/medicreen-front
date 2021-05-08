import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {PatientsComponent} from './components/patients/patients.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PatientAddComponent} from "./components/patients/patient-add/patient-add.component";
import {PatientEditComponent} from "./components/patients/patient-edit/patient-edit.component";
import {NoteEditComponent} from './components/patients/patient-note/note-edit.component';
import {allIcons, NgxBootstrapIconsModule} from "ngx-bootstrap-icons";
import {DialogCreateNoteComponent} from './components/patients/patient-note/dialog-create-note/dialog-create-note.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MateSpinnerModule} from "@material-extra/spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverlayModule} from "@angular/cdk/overlay";
import {DialogEditNoteComponent} from './components/patients/patient-note/dialog-edit-note/dialog-edit-note.component';
import {DialogConfirmationlogComponent} from './components/utils/dialog-confirmationlog/dialog-confirmationlog.component';
import {ConfirmationDialogService} from "./components/utils/dialog-confirmationlog/ConfirmationDialogService";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PatientsComponent,
    HomeComponent,
    PatientAddComponent,
    PatientEditComponent,
    NoteEditComponent,
    DialogCreateNoteComponent,
    DialogEditNoteComponent,
    DialogConfirmationlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    MatFormFieldModule,
    MatDialogModule,
    MateSpinnerModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSnackBarModule,
    OverlayModule
  ],
  providers: [ConfirmationDialogService],
  entryComponents: [DialogConfirmationlogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
