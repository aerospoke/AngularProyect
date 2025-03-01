import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [IonicModule,FormsModule],
  standalone: true
  
})
export class LoginPageComponent  implements OnInit {

  public dataLogin = {
    email:'',
    password:''
  }

  public errorMessage: string = '';

  constructor(
    private router: Router,
    private usuarioService :UsuarioService
  ) { }

  ngOnInit() {}

  clickButtonBack(){    
    this.router.navigate(['/home']);
  }
  submitButton(){
    console.log("llego esta info para iniciar sesion");
    console.log(this.dataLogin);
    this.onLogin();
  }

  onLogin(){

    this.usuarioService.login(this.dataLogin).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        this.router.navigate(['/profile']);
      },
      (error) => {
        console.log("🚀 ~ LoginPageComponent ~ onLogin ~ error:", error)
        this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      }
    );
    

  }

}
