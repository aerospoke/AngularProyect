import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
    selectedColor:'',
  }
  constructor(private router:Router) { }
  

  ngOnInit() {}

  clickButtonBack(){    
    this.router.navigate(['/home']);
  }

  submitButton(){
    // this.userData
  }

}
