import { Component } from '@angular/core';

// Adicionales
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BotonComponent } from '../../../Servicios/boton/boton.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-somos',
  imports: [
    MatIconModule,
    BotonComponent,
    RouterModule
    
  ],
  templateUrl: './somos.component.html',
  styleUrl: './somos.component.css'
})
export class SomosComponent {

  constructor(private router: Router) { }


  regresar() {
    this.router.navigate([''])
  }

}
