import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/modelo/Habitacion';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-ha-read',
  templateUrl: './ha-read.component.html',
  styleUrls: ['./ha-read.component.css']
})
export class HaReadComponent implements OnInit {

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

  eliminarHabitacion(id: number) {
    this.servicioService.eliminarHabitacion(id).subscribe(() => {
      // Después de eliminar la habitación, obtén las habitaciones actualizadas
      this.servicioService.getHabitaciones().subscribe((data) => {
        // Convierte los valores de precio a números con punto decimal
        this.habitaciones = data.map((habitacion) => {
          habitacion.precio = parseFloat(habitacion.precio.replace(',', '.')).toString();
          return habitacion;
        });
      });
    });
  }


  // Método para redirigir a la edición de habitación
  editarHabitacion(id: number) {
    this.router.navigate(['/editar-habitacion', id]);
  }

 // Método para redirigir a la edición de habitación
 reservarHabitacion() {
  this.router.navigate(['/registrarUsu-reserva']);
}
}

