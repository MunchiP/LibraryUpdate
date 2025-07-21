import { Component } from '@angular/core';
//Material
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inicio',
  imports: [
    MatIconModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  imagenes = [
    'https://raw.githubusercontent.com/MunchiP/ImagenesBiblio/refs/heads/main/Sala_A.jpg',
    'https://raw.githubusercontent.com/MunchiP/ImagenesBiblio/refs/heads/main/Sala_B.jpg',
    'https://raw.githubusercontent.com/MunchiP/ImagenesBiblio/refs/heads/main/Sala_Infantil.jpg'
  ];

  imagenActual = 0;

  siguiente(){
    this.imagenActual = (this.imagenActual+1)% this.imagenes.length;
  }

  anterior(){
    this.imagenActual = (this.imagenActual-1 + this.imagenes.length) % this.imagenes.length;
  }

}
