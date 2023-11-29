import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/modelo/Habitacion';
import { ServicioService } from 'src/app/servicio/servicio.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  habitaciones: Habitacion[] = [];

  constructor(private servicioService: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.servicioService.getHabitaciones()
      .subscribe(data => {
        // Convierte los valores de precio a números con punto decimal
        this.habitaciones = data.map(habitacion => {
          habitacion.precio = parseFloat(habitacion.precio.replace(',', '.')).toString();
          return habitacion;
        });
      });
  }

}
