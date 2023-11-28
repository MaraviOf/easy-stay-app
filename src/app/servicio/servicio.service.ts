import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from '../modelo/Hotel';
import { Habitacion } from '../modelo/Habitacion';
import { Reserva } from '../modelo/Reserva';
import { Usuario } from '../modelo/Usuario';
import { Observable } from 'rxjs';
import { TipoHabitacion } from '../modelo/TipoHabitacion';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  // PARA MANTENIMIENTO EN SERVICIO PARA HOTEL

  Url = 'http://localhost:5000/hotel';

  getHoteles() {
    return this.http.get<Hotel[]>(this.Url);
  }

  createHotel(imagen: File, hotel: Hotel): Observable<Hotel> {
    const formData = new FormData();

    // Agrega la imagen al FormData
    formData.append('imagen', imagen);

    // Convierte el objeto hotel a JSON y agrega el blob al FormData
    const jsonBlob = new Blob([JSON.stringify(hotel)], { type: 'application/json' });
    formData.append('hoteles', jsonBlob);

    // Configura las cabeceras para manejar la carga de archivos
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    // Realiza la solicitud POST con el FormData
    return this.http.post<Hotel>(this.Url, formData, { headers });
  }

  getHotelId(id:number){
    return this.http.get<Hotel>(this.Url+"/"+id);
  }

  updateHotel(imagen: File, hotel: Hotel): Observable<Hotel> {
    const formData = new FormData();

    // Agrega la imagen al FormData solo si se proporciona una nueva imagen
    if (imagen) {
      formData.append('imagen', imagen);
    }

    // Convierte el objeto hotel a JSON y agrega el blob al FormData
    const jsonBlob = new Blob([JSON.stringify(hotel)], { type: 'application/json' });
    formData.append('hoteles', jsonBlob); // Cambiado a 'hoteles' para coincidir con el controlador

    // Configura las cabeceras para manejar la carga de archivos
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    // Realiza la solicitud PUT con el FormData
    return this.http.put<Hotel>(`${this.Url}/${hotel.id}`, formData, { headers });
  }

  eliminarHotel(id:number){
    return this.http.delete<Hotel>(this.Url+"/"+ id);
  }
  buscarHotelesPorCiudad(ciudad: string): Observable<Hotel[]> {
    const url = `${this.Url}/buscarPorCiudad/${ciudad}`;
  return this.http.get<Hotel[]>(url);
  }

  // PARA MANTENIMIENTO EN SERVICIO PARA HABITACION

UrlHabitacion = 'http://localhost:5000/habitacion';

  getHabitaciones() {
    return this.http.get<Habitacion[]>(this.UrlHabitacion);
  }

  createHabitacion(imagen: File, habitacion: Habitacion) {
    const formData = new FormData();

    // Agregar imagen al FormData
    formData.append('imagen',imagen);

    //Convertir el objeto habitacion a JSON y lo agrega al formData
    const jsonBlob = new Blob([JSON.stringify(habitacion)], {type: 'application/json'});
    formData.append('habitacion', jsonBlob);

    //Configuracion de cabeceras
    const headers = new HttpHeaders({'enctype': 'multipart/form-data'});

    // Solicitud POST con el FormData
    return this.http.post<Habitacion>(this.UrlHabitacion, formData, {headers});
  }

  getHabitacionId(id: number) {
    return this.http.get<Habitacion>(this.UrlHabitacion + "/" + id);
  }

  updateHabitacion(imagen: File, habitacion: Habitacion) {
    const formData = new FormData();

    // Agregar imagen al FormData
    formData.append('imagen',imagen);

    //Convertir el objeto habitacion a JSON y lo agrega al formData
    const jsonBlob = new Blob([JSON.stringify(habitacion)], {type: 'application/json'});
    formData.append('h', jsonBlob);

    //Configuracion de cabeceras
    const headers = new HttpHeaders({'enctype': 'multipart/form-data'});

    // PUT con el FormData
    return this.http.put<Habitacion>(this.UrlHabitacion + "/" + habitacion.id, formData, {headers});
  }

  eliminarHabitacion(id: number) {
    return this.http.delete<Habitacion>(this.UrlHabitacion + "/" + id);
  }


  // PARA MANTENIMIENTO EN SERVICIO PARA RESERVA

  UrlReserva = 'http://localhost:5000/reserva';

  getReservas() {
    return this.http.get<Reserva[]>(this.UrlReserva);
  }

  createReserva(reserva: Reserva) {
    return this.http.post<Reserva>(this.UrlReserva, reserva);
  }

  getReservaId(id: number) {
    return this.http.get<Reserva>(this.UrlReserva + "/" + id);
  }

  updateReserva(reserva: Reserva) {
    return this.http.put<Reserva>(this.UrlReserva + "/" + reserva.id, reserva);
  }

  eliminarReserva(id: number) {
    return this.http.delete<Reserva>(this.UrlReserva + "/" + id);
  }

   // PARA MANTENIMIENTO EN SERVICIO PARA USUARIO

  UrlUsuario = 'http://localhost:5000/usuarios';

  getUsuarios() {
    return this.http.get<Usuario[]>(this.UrlUsuario);
  }


  // PARA MANTENIMIENTO EN SERVICIO PARA TIPOHABITACION

  UrlTipoHabitacion = 'http://localhost:5000/tipoHabitacion';

  getTipoHabitacion() {
    return this.http.get<TipoHabitacion[]>(this.UrlTipoHabitacion);
  }

}
