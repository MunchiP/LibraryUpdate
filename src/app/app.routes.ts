import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './Publico/catalogo/catalogo.component';
import { ServiciosComponent } from './Publico/Servicios/servicios/servicios.component';
import { HakunaComponent } from './Publico/Servicios/hakuna/hakuna.component';
import { BiblioMovilComponent } from './Publico/Servicios/biblio-movil/biblio-movil.component';
import { SordoCiegosComponent } from './Publico/Servicios/sordo-ciegos/sordo-ciegos.component';
import { VirtualComponent } from './Publico/Servicios/virtual/virtual.component';
import { ConferenciasComponent } from './Publico/Servicios/conferencias/conferencias.component';
import { SomosComponent } from './Publico/QuienesSomos/somos/somos.component';
import { ContactanosComponent } from './Publico/QuienesSomos/contactanos/contactanos.component';
import { HistoriaComponent } from './Publico/QuienesSomos/historia/historia.component';
import { InformacionComponent } from './Publico/QuienesSomos/informacion/informacion.component';
import { RedesSocialesComponent } from './Publico/QuienesSomos/redes-sociales/redes-sociales.component';

export const routes: Routes = [

  //1 Usuarios Links

//   {path: 'Usuario' , component: UsuarioInicioComponent },
//   {path: 'Usuario/Informacion' , component: InfoPersonalComponent },
//   {path: 'Usuario/Libros' , component: InfoLibrosComponent },
//   {path: 'Usuario/Nuevo' , component: NuevoUsuarioComponent },
//   {path: 'Usuario/Login' , component: LogInComponent },


  //2 Catalogos Links

  {path: 'Catalogo' , component: CatalogoComponent },

  //3 Servicios Links

  {path: 'Servicio' , component: ServiciosComponent },
  {path: 'Servicio/HakunaMatata' , component: HakunaComponent },
  {path: 'Servicio/BiblioMovil' , component: BiblioMovilComponent },
  {path: 'Servicio/SordoCiegos' , component: SordoCiegosComponent },
  {path: 'Servicio/AulaVirtual' , component: VirtualComponent },
  {path: 'Servicio/Conferencias' , component: ConferenciasComponent },

  // 4 Redes Links

//   {path: 'Redes' , component: Redes },
//   {path: 'Redes/BiblioEscoalres' , component: EscolaresComponent },
//   {path: 'Redes/BiblioComunitarias' , component: ComunitariasComponent },
//   {path: 'Redes/Organizaciones' , component: OrganizacionesComponent },

  // 5 Quienes Somos Links

  {path: 'QuienesSomos' , component: SomosComponent },
  {path: 'QuienesSomos/Contacto' , component: ContactanosComponent },
  {path: 'QuienesSomos/Historia' , component: HistoriaComponent },
  {path: 'QuienesSomos/Informacion' , component: InformacionComponent },
  {path: 'QuienesSomos/RedesSociales' , component: RedesSocialesComponent },

  
{path: '' , component: InicioComponent },
{path: '**', component: InicioComponent},

];
