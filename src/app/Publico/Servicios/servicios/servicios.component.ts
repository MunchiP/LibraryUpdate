import { Component } from '@angular/core';
// Adicionales
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BotonComponent } from '../../../Servicios/boton/boton.component';


@Component({
  selector: 'app-servicios',
  imports: [
    MatCardModule,
    BotonComponent
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
    constructor(private router: Router) { }

  regresar(){
    this.router.navigate([''])
  }


}
