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
    '<img src="https://raw.githubusercontent.com/MunchiP/ImagenesBiblio/3c351f45d00f4b1fe7f3a5cdec12bee621bdbfd4/WhatsApp%20Image%202023-01-21%20at%202.57.24%20PM.jpeg',
    'https://raw.githubusercontent.com/MunchiP/ImagenesBiblio/3c351f45d00f4b1fe7f3a5cdec12bee621bdbfd4/WhatsApp%20Image%202023-01-21%20at%202.57.26%20PM.jpeg',
    'https://raw.githubusercontent.com/MunchiP/ImagenesBiblio/3c351f45d00f4b1fe7f3a5cdec12bee621bdbfd4/WhatsApp%20Image%202023-01-21%20at%203.00.39%20PM.jpeg'
  ];

  imagenActual = 0;

  siguiente(){
    this.imagenActual = (this.imagenActual+1)% this.imagenes.length;
  }

  anterior(){
    this.imagenActual = (this.imagenActual-1 + this.imagenes.length) % this.imagenes.length;
  }

}
