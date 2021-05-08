// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

const snackBarHorizontalPosition : MatSnackBarHorizontalPosition ='center'
const snackBarVerticalPosition : MatSnackBarVerticalPosition ='top'

export const environment = {
  production: false,
  patient:"http://localhost:8081",
  note:"http://localhost:8082",

  snackbar:{
    horizontalPosition : snackBarHorizontalPosition,
    verticalPosition : snackBarVerticalPosition
  }

};
