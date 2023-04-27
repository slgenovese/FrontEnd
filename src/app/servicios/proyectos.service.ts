import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelos/proyectos';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  status!: String;
  postId!: String;

  constructor(private http: HttpClient) { }

  public getProyectos():  Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(localStorage.getItem('link_Base')+"portfolio/v1/proyectos");

  }
  
  public deleteProyectos(id: number) {
    this.http.delete(localStorage.getItem('link_Base')+"portfolio/v1/proyectos/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }

  public postProyectos(proyectos: Proyectos){
    this.http.post<any>(localStorage.getItem('link_Base')+"portfolio/v1/proyectos", proyectos)
    .subscribe(data => this.postId = data.id);
  }


  public putProyectos(id: number, proyectos: Proyectos){
    this.http.put<any>(localStorage.getItem('link_Base')+"portfolio/v1/proyectos/datos/"+id, proyectos)
    .subscribe(data => this.postId = data.id);
  }

}
