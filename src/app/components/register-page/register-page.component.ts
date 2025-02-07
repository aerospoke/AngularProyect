import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [IonicModule,FormsModule], 
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {

  public userData = {
    name:'',
    password:'',
    gender:''
  }

  constructor(private router: Router) {}

  clickButtonBack(){    
    this.router.navigate(['/home']);
  }

  submitButton(){
    console.log("llego esta info para empezar el registro");
    console.log(this.userData);
    
  }
}
