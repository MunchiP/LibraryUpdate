import { Component } from '@angular/core';

//Componentes adicionales
import { Router } from '@angular/router';
import { BotonComponent } from '../../../Servicios/boton/boton.component';


@Component({
  selector: 'app-informacion',
  imports: [
    BotonComponent
  ],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

  constructor (private router:Router) {}

regresar()
{
  this.router.navigate(['/QuienesSomos'])
}


}
