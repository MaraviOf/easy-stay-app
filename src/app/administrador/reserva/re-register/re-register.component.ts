import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/modelo/Habitacion';
import { Reserva } from 'src/app/modelo/Reserva';
import { Usuario } from 'src/app/modelo/Usuario';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-re-register',
  templateUrl: './re-register.component.html',
  styleUrls: ['./re-register.component.css']
})
export class ReRegisterComponent implements OnInit {

  reserva: Reserva = new Reserva();

  habitaciones: Habitacion[]=[];

  usuarios: Usuario[]=[];

  constructor(private servicioService: ServicioService, private router : Router) { }

  ngOnInit(): void {
    this.obtenerHabitaciones();
    this.obtenerUsuarios();
  }

  obtenerHabitaciones() {
    this.servicioService.getHabitaciones().subscribe((data) => {
      this.habitaciones = data;
    });
  }

  obtenerUsuarios() {
    this.servicioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  registrarReserva():void{
    this.servicioService.createReserva(this.reserva)
    .subscribe(() => {
      this.router.navigate(['/listar-reserva']);
    });
  }

}

