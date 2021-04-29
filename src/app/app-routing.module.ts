import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from "./components/patients/patients.component";
import {HomeComponent} from "./components/home/home.component";
import {PatientAddComponent} from "./components/patients/patient-add/patient-add.component";
import {PatientEditComponent} from "./components/patients/patient-edit/patient-edit.component";
import {NoteEditComponent} from "./components/patients/patient-note/note-edit.component";


const routes: Routes = [
  { path: "patients", component: PatientsComponent},
  { path: "newPatient", component: PatientAddComponent},
  { path: "editPatient/:id", component: PatientEditComponent},
  { path: "notePatient/:id", component: NoteEditComponent},
  { path: "home", component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
