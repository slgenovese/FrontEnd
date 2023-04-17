import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  status!: String;

  public getExperiencia():  Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>("http://localhost:8080/portfolio/v1/experiencias");
  }
  
  public deleteExperiencia(id: number) {
    this.http.delete("http://localhost:8080/portfolio/v1/experiencias/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }

}
