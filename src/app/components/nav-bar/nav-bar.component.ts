import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [IonicModule,CommonModule],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {
  public options = [{name:"Register",url:"/register"},{name:"Login",url:"/login"}]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

   
  }

  buttonRegister(option:String){
    console.log("🚀 ~ NavBarComponent ~ buttonRegister ~ option:", option)
    
    this.router.navigate([option]);
  }

}
