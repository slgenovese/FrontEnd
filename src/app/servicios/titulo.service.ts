import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Titulo } from '../modelos/titulo';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  constructor(private http: HttpClient) { }

  public getTitulo():  Observable<Titulo[]>{
    return this.http.get<Titulo[]>(localStorage.getItem('link_Base')+"portfolio/v1/titulos");

  }
}
