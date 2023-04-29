import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../modelos/Login';
import { Respuesta } from '../modelos/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  postId: string="";
  respuesta: Respuesta = new Respuesta; 

  constructor(private http: HttpClient) { }
  public getLogin(): Observable<Login>{
    return this.http.get<Login>("./assets/login.json");

  }

  public  postLogin(login: Login ): Observable<Respuesta>{
      return this.http.post<Respuesta>(localStorage.getItem('link_Base')+"portfolio/v1/usuarios/password", login);
    }  
  }
