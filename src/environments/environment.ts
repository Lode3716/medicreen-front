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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
