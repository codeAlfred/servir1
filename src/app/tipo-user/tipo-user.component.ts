import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-tipo-user',
  templateUrl: './tipo-user.component.html',
  styleUrls: ['./tipo-user.component.css']
})
export class TipoUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
