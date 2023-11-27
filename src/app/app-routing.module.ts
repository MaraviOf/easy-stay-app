import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HaReadComponent } from './administrador/habitacion/ha-read/ha-read.component';
import { HaEditComponent } from './administrador/habitacion/ha-edit/ha-edit.component';
import { HaRegisterComponent } from './administrador/habitacion/ha-register/ha-register.component';

import { HoReadComponent } from './administrador/hotel/ho-read/ho-read.component';
import { HoEditComponent } from './administrador/hotel/ho-edit/ho-edit.component';
import { HoRegisterComponent } from './administrador/hotel/ho-register/ho-register.component';

import { ReReadComponent } from './administrador/reserva/re-read/re-read.component';
import { ReRegisterComponent } from './administrador/reserva/re-register/re-register.component';
import { ReEditComponent } from './administrador/reserva/re-edit/re-edit.component';



const routes: Routes = [
  //HOTEL
  { path: 'listar-hotel', component: HoReadComponent },
  { path: 'registrar-hotel', component: HoRegisterComponent },
  { path: 'editar-hotel', component: HoEditComponent },
  //HABITACION
  { path: 'listar-habitacion', component: HaReadComponent },
  { path: 'registrar-habitacion', component: HaRegisterComponent },
  { path: 'editar-habitacion/:id', component: HaEditComponent },
  // Reservas
  { path: 'listar-reserva', component: ReReadComponent },
  { path: 'registrar-reserva', component: ReRegisterComponent },
  { path: 'editar-reserva/:id', component: ReEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
