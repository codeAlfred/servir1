import { Component } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TipoUserComponent } from './tipo-user/tipo-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal1';

  constructor(public dialog: MatDialog){}

  openDialog(){
    //el primer parametro es un componente y el segundo pasa parametros de un componente
    this.dialog.open(TipoUserComponent);
  }

}
