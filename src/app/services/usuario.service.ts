import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  registrarUsuario(data: any): Observable<any> {
    return this.http.post(this.apiUrl+'/register', data);
  }

  login(data:any): Observable<any>{
    return this.http.post(this.apiUrl+'/login', data);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; 
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
