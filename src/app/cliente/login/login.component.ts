import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/servicio/login-service.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData = {
  "username" : '',
  "password" : ''
}

constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router){
}

ngOnInit(): void {
  
}


formSubmit (){
  if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
    this.snack.open("El nombre de usuario es requerido !!","Aceptar",{
      duration : 3000
    })
    return;
  }

  if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
    this.snack.open("Contraseña requerida","Aceptar",{
      duration : 3000
  })
  return;
}

  this.loginService.generateToken(this.loginData).subscribe(
    (data:any) => {
      console.log(data);
      this.loginService.loginUser(data.token);
      this.loginService.getCurrentUser().subscribe((user:any) =>{
        this.loginService.setUser(user);
        console.log(user);

        if(this.loginService.getUserRole() == "ADMIN"){
          //admin
          window.location.href = '/admin';
        }else if (this.loginService.getUserRole() == "NORMAL"){
          //usuario
          window.location.href = '/page';
        }
        else{
          this.loginService.logout();
          this.snack.open('Contraseña o usuario Incorrecto','Aceptar',{
            duration: 3000
          });
          
        }
      }); 

    },(error) => {
      console.log(error)
    }
  )

    

}
LandingUsu() {
  this.router.navigate(["page-usu"])
}
}