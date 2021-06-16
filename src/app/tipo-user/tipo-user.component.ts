import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-user',
  templateUrl: './tipo-user.component.html',
  styleUrls: ['./tipo-user.component.css']
})
export class TipoUserComponent implements OnInit {

  //para poder pasar parametros 
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  tipo_users = [
    {
      "idUser":1,
      "tipoUser": "Evaluador",
      "imgUser":"../../assets/evaluador.jpg"
    },
    {
      "idUser":2,
      "tipoUser": "Evaluado",
      "imgUser":"../../assets/evaluado.png"
    },
    {
      "idUser":3,
      "tipoUser": "ORH",
      "imgUser":"../../assets/orh.jpg"
    },
    {
      "idUser":4,
      "tipoUser": "TES1",
      "imgUser":"../../assets/evaluador.jpg"
    },
    {
      "idUser":4,
      "tipoUser": "TES1",
      "imgUser":"../../assets/evaluador.jpg"
    },
    {
      "idUser":4,
      "tipoUser": "TES1",
      "imgUser":"../../assets/evaluador.jpg"
    },
    {
      "idUser":4,
      "tipoUser": "TES1",
      "imgUser":"../../assets/evaluador.jpg"
    }
  ]
}
