import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [IonicModule,FormsModule],
  
})
export class LoginPageComponent  implements OnInit {

  public dataLogin = {
    username:'',
    password:''
  }
  constructor(private router: Router) { }

  ngOnInit() {}

  clickButtonBack(){    
    this.router.navigate(['/home']);
  }
  submitButton(){
    console.log("llego esta info para iniciar sesion");
    console.log(this.dataLogin);
    
  }

}
