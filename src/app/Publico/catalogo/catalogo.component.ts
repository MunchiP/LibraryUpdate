import { Component } from '@angular/core';

// Adicional
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BotonComponent } from '../../Servicios/boton/boton.component';


@Component({
  selector: 'app-catalogo',
  imports: [
    MatCardModule,
    BotonComponent
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
    constructor(private router: Router) { }

  regresar(){
    this.router.navigate([''])
  }

}
