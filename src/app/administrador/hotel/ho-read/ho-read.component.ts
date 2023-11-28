import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/modelo/Hotel';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-ho-read',
  templateUrl: './ho-read.component.html',
  styleUrls: ['./ho-read.component.css']
})
export class HoReadComponent implements OnInit {

  hoteles: Hotel[] = [];

  constructor(private servicio: ServicioService, private router: Router) { }

  ngOnInit() {
    this.servicio.getHoteles()
      .subscribe((data) => {
        console.log(data);
        this.hoteles = data || [];
      });
  }
  // EDITAR => PARA LANZAR AL COMPONENT EDITAR Y AGARRAR LOS DATOS POR EL ID PARA PODER ACTUALZIAR DESDE ALLA
  Editar(hotel: Hotel) {
    localStorage.setItem("id", hotel.id!.toString());
    this.router.navigate(["editar-hotel"])
  }

  Eliminar(id: number) {
    this.servicio.eliminarHotel(id)
      .subscribe(() => {
        // Vuelve a cargar la lista de habitaciones después de eliminar
        this.servicio.getHoteles()
          .subscribe(data => {
            this.hoteles = data;
            alert("Hotel Eliminado Satisfactoriamente....!!!!")
          });
      });
  }


}
