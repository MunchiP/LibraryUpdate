import { Component } from '@angular/core';

//Componentes adicionales
import { Router } from '@angular/router';
import { BotonComponent } from '../../../Servicios/boton/boton.component';

@Component({
  selector: 'app-historia',
  imports: [
    BotonComponent
  ],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {
  
constructor (private router:Router) {}

regresar()
{
  this.router.navigate(['/QuienesSomos'])
}


}
