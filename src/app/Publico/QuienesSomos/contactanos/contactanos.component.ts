import { Component } from '@angular/core';

//Componentes adicionales
import { Router } from '@angular/router';
import { BotonComponent } from '../../../Servicios/boton/boton.component';

@Component({
  selector: 'app-contactanos',
  imports: [
    BotonComponent
  ],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {

constructor (private router:Router) {}

regresar()
{
  this.router.navigate(['/QuienesSomos'])
}

}
