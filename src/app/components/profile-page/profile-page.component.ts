import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  imports:[IonicModule,CommonModule,FormsModule]
})
export class ProfilePageComponent  implements OnInit {

  public userData = {
    name:'',
    email:'',
    password:'',
    country:'',
  }

  public responseCreation = ''

  constructor(
    private router:Router,
    private usuarioService:UsuarioService
  ) { }
  
  
   ngOnInit() {
    this.getUser();
  }

  clickButtonBack(){    
    this.router.navigate(['/home']);
  }

  submitButton(){
    
    this.usuarioService.updateUser(this.userData).subscribe({
      next: (response) => {
        this.responseCreation=response.message; 
      },
    });

  }

  deleteButton(){
    this.usuarioService.deleteUser(this.userData).subscribe({
      next: (response) => {
        this.responseCreation=response.message; 
      },
    });
  }

  getUser() {
    this.usuarioService.getUser().subscribe({
      next: (response) => {
        this.userData = { ...response }; 
      },
    });
  }
  
  


}
