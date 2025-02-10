import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';

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
    private router: Router,
    private usuarioService:UsuarioService
  ) { }

  ngOnInit() {
    this.updateMenu();
  }

  updateMenu() {
    if (localStorage.getItem("token")) {
      this.options = [
        { name: "Profile", url: "/profile", icon: "person-circle-outline" },
        { name: "Support", url: "/support", icon: "help-circle-outline" },
        { name: "Logout", url: "logout", icon: "log-out-outline" }
      ];
    } else {
      this.options = [
        { name: "Register", url: "/register", icon: "person-add-outline" },
        { name: "Login", url: "/login", icon: "finger-print-outline" },
        { name: "Support", url: "/support", icon: "help-circle-outline" }
      ];
    }
  }

  buttonRegister(option:String){

    if(option === 'logout'){
      this.usuarioService.logout();
      this.updateMenu(); 
      this.router.navigate(["/login"]); 
      return
    }

    this.router.navigate([option]);
  }

}
