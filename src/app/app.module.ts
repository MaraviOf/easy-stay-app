import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { ServicioService } from './servicio/servicio.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './cliente/navbar/navbar.component';
import { FooterComponent } from './cliente/footer/footer.component';
import { LandingComponent } from './cliente/landing/landing.component';
import { FaqComponent } from './cliente/faq/faq.component';

import { HoEditComponent } from './administrador/hotel/ho-edit/ho-edit.component';
import { HoReadComponent } from './administrador/hotel/ho-read/ho-read.component';
import { HaEditComponent } from './administrador/habitacion/ha-edit/ha-edit.component';

import { HoRegisterComponent } from './administrador/hotel/ho-register/ho-register.component';
import { HaReadComponent } from './administrador/habitacion/ha-read/ha-read.component';
import { HaRegisterComponent } from './administrador/habitacion/ha-register/ha-register.component';

import { ReEditComponent } from './administrador/reserva/re-edit/re-edit.component';
import { ReReadComponent } from './administrador/reserva/re-read/re-read.component';
import { ReRegisterComponent } from './administrador/reserva/re-register/re-register.component';

import { LoginComponent } from './cliente/login/login.component';

import { ReadHaComponent } from './cliente/habitacion/read-ha/read-ha.component';
import { ReadHoComponent } from './cliente/hotel/read-ho/read-ho.component';
import { ReadReComponent } from './cliente/reserva/read-re/read-re.component';
import { RegisterReComponent } from './cliente/reserva/register-re/register-re.component';
import { RegisterComponent } from './cliente/register/register.component';
import { DashboardComponent } from './administrador/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { authInterceptorProviders } from './servicio/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    FaqComponent,
    HoEditComponent,
    HoReadComponent,
    HoRegisterComponent,
    HaEditComponent,
    HaReadComponent,
    HaRegisterComponent,
    ReEditComponent,
    ReReadComponent,
    ReRegisterComponent,
    LoginComponent,
    ReadHaComponent,
    ReadHoComponent,
    ReadReComponent,
    RegisterReComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    
  ],
  providers: [authInterceptorProviders,ServicioService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
