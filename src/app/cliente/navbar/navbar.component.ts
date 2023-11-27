import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
}
