import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'frontend';

  constructor(private router: Router) { }

  Listar() {
    this.router.navigate(["listar-hotel"]);
  }

  ListarHabitaciones() {
    this.router.navigate(["listar-habitacion"]);
  }
  ListarReservas() {
    this.router.navigate(["listar-reserva"]);
  }

  Registrar() {
    this.router.navigate(["registrar-hotel"]);
  }

  RegistrarHabitacion() {
    this.router.navigate(["registrar-habitacion"])
  }

  RegistrarReserva() {
    this.router.navigate(["registrar-reserva"])
  }

  Logout() {
    this.router.navigate(["login"]);
  }
}

