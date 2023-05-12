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
  postId!: String;

  public getExperiencia():  Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(localStorage.getItem('link_Base')+"portfolio/v1/experiencias");
  }
  
  public deleteExperiencia(id: number) {
     this.http.delete(localStorage.getItem('link_Base')+"portfolio/v1/experiencias/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }

  public putExperiencia(id: number, experiencia: Experiencia){
    this.http.put<any>(localStorage.getItem('link_Base')+"portfolio/v1/experiencias/datos/"+id, experiencia)
    .subscribe(data => this.postId = data.id);
  }

  public postExperiencia(experiencia: Experiencia){
    this.http.post<any>(localStorage.getItem('link_Base')+"portfolio/v1/experiencias/"+ localStorage.getItem("persona_id"), experiencia)
    .subscribe(data => this.postId = data.id);
  }

}
