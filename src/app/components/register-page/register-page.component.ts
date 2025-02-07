import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [IonicModule,], 
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {

  constructor(private router: Router) {}

  clickButtonBack(){    
    this.router.navigate(['/home']);
  }
}
