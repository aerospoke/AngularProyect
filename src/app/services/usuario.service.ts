import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8000/api';

  public UserDataDB = {};

  constructor(private http: HttpClient) {}

  registrarUsuario(data: any): Observable<any> {
    return this.http.post(this.apiUrl+'/register', data);
  }

  updateUser(userData:any):Observable<any>{
  
    return this.http.post(this.apiUrl+'/updateUser', userData);
  }

  getUser(): Observable<User> {
    const dataUser = localStorage.getItem('user');

    if (!dataUser) {
      return throwError(() => new Error("No hay usuario autenticado"));
    }

    const userId = JSON.parse(dataUser).id || '';

    const params = new HttpParams().set('id', userId);

    return this.http.get<User>(`${this.apiUrl}/getUser`, { params });
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
