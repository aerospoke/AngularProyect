import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(): boolean {
    if (this.usuarioService.isAuthenticated()) {
      return true; 
    } else {
        this.router.navigate(['/home'])
      return false;
    }
  }
}
