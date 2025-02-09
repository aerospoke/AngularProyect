import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [IonicModule,FormsModule,CommonModule], 
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {

  public userData = {
    name:'',
    email:'',
    password:'',
  }
  public responseCreation = ''

  constructor(
    private router: Router,
    private usuarioService :UsuarioService
  ) {}

  clickButtonBack(){    
    this.router.navigate(['/home']);
  }

  submitButton(){
    console.log("llego esta info para empezar el registro");
    console.log(this.userData);  
    if(this.userData){
      this.createUserInDB(this.userData)
    }
  }

  createUserInDB(userDataProcessed:any){

    this.responseCreation = ''
    
    this.usuarioService.registrarUsuario(userDataProcessed).subscribe({
      next: (response) => {
        this.responseCreation=response.message; 
      },
      error: (error) => {
        this.responseCreation=error.error.message;
      }
    });
  }
}
