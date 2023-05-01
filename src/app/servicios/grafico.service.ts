import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grafico, Grafico_sin_ID, HabilidadesDato } from '../modelos/grafico';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  status!: String;
  postId!: String;
  
  constructor(private http: HttpClient) { }

  public getGrafico():  Observable<Grafico[]>{
    return this.http.get<Grafico[]>(localStorage.getItem('link_Base')+"portfolio/v1/habilidades");

  }
    
  public deleteGrafico(id: number) {
    this.http.delete(localStorage.getItem('link_Base')+"portfolio/v1/habilidades/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }


  public postGrafico(grafico: Grafico_sin_ID ){
    this.http.post<any>(localStorage.getItem('link_Base')+"portfolio/v1/habilidades/"+ localStorage.getItem("persona_id"), grafico)
    .subscribe(data => this.postId = data.id);
  }

}
