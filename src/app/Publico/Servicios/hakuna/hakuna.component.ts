import { Component } from '@angular/core';
// Adiionales
import { Router } from '@angular/router';
import { BotonComponent } from '../../../Servicios/boton/boton.component';


@Component({
  selector: 'app-hakuna',
  imports: [
    BotonComponent
  ],
  templateUrl: './hakuna.component.html',
  styleUrl: './hakuna.component.css'
})
export class HakunaComponent {
  
  constructor(private router: Router) { }


  regresar() {
    this.router.navigate(['/Servicio'])
  }


}
