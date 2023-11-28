import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/modelo/Habitacion';
import { Hotel } from 'src/app/modelo/Hotel';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  hoteles: Hotel[] = [];
  habitaciones: Habitacion[] = [];

  constructor(private servicio: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.getHabitaciones()
      .subscribe(data => {
        // Convierte los valores de precio a números con punto decimal
        this.habitaciones = data.map(habitacion => {
          habitacion.precio = parseFloat(habitacion.precio.replace(',', '.')).toString();
          return habitacion;
        });
      });
    this.obtenerHoteles();
  }

  obtenerHoteles() {
    this.servicio.getHoteles().subscribe(data => {
      this.hoteles = data;

    });
  }

  Faq() {
    this.router.navigate(["faq"]);
  }

  VistaUsuarioHabitacion() {
    this.router.navigate(["listarUsu-habitacion"]);
  }

}