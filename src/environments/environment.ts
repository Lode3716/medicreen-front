// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

const snackBarHorizontalPosition : MatSnackBarHorizontalPosition ='center'
const snackBarVerticalPosition : MatSnackBarVerticalPosition ='top'

export const environment = {
  production: false,
  patient:"http://127.0.0.1:8081",
  note:"http://127.0.0.1:8082",
  rapport:"http://127.0.0.1:8080",

  snackbar:{
    horizontalPosition : snackBarHorizontalPosition,
    verticalPosition : snackBarVerticalPosition
  }

};
