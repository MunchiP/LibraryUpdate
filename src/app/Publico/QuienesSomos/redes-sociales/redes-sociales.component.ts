import { Component } from '@angular/core';

// Adicionales
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { BotonComponent } from '../../../Servicios/boton/boton.component';


@Component({
  selector: 'app-redes-sociales',
  imports: [
    MatCardModule,
    BotonComponent
  ],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.css'
})
export class RedesSocialesComponent {

  constructor (private router:Router) {}

  regresar()
  {
    this.router.navigate(['/QuienesSomos'])
  }

}
