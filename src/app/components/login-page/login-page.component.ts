import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [IonicModule],
  
})
export class LoginPageComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  clickButtonBack(){    
    this.router.navigate(['/home']);
  }

}
