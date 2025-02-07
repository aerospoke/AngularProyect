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
  public options = [
    {name:"Register",url:"/register",icon:"person-add-outline"},
    {name:"Login",url:"/login",icon:"finger-print-outline"},
    {name:"Support",url:"/support",icon:"help-circle-outline"}
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

   
  }

  buttonRegister(option:String){
    
    this.router.navigate([option]);
  }

}
