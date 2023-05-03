import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca_De } from '../modelos/acerca-de';
import { Servidor_Imagenes } from '../modelos/acerca-de';
@Injectable({
  providedIn: 'root'
})

export class AcercaDeService {

  postId!: String;

  constructor(private http: HttpClient) { }

  public getAcercaDe():  Observable<Acerca_De>{
    return this.http.get<Acerca_De>(localStorage.getItem('link_Base')+"portfolio/v1/personas/acercade");

  }

  public getServidorImagenes():  Observable<Servidor_Imagenes>{
    return this.http.get<Servidor_Imagenes>(localStorage.getItem('link_Base')+"portfolio/v1/personas/servidorimagenes");

  }

  public putAcercaDe(id: number, acerca_de: String){
    this.http.put<any>(localStorage.getItem('link_Base')+"portfolio/v1/personas/acercade/"+id, acerca_de)
    .subscribe(data => this.postId = data.id);
  }

  public putAcercaDeFull(id: number, acerca_de: Acerca_De){
    this.http.put<any>(localStorage.getItem('link_Base')+"portfolio/v1/personas/datos/"+id, acerca_de)
    .subscribe(data => this.postId = data.id);
  }

  public putServidorImagenes(id: number, servidorImagenes: String){
    this.http.put<any>(localStorage.getItem('link_Base')+"portfolio/v1/personas/servidorimagenes/"+id, servidorImagenes)
    .subscribe(data => this.postId = data.id);
  }


}
