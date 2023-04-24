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
    return this.http.get<Proyectos[]>("http://localhost:8080/portfolio/v1/proyectos");

  }
  
  public deleteProyectos(id: number) {
    this.http.delete("http://localhost:8080/portfolio/v1/proyectos/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }

  public putProyectos(id: number, proyectos: Proyectos){
    this.http.put<any>('http://localhost:8080/portfolio/v1/proyectos/datos/'+id, proyectos)
    .subscribe(data => this.postId = data.id);
  }

}
