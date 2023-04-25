import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grafico, Grafico_aux, HabilidadesDato } from '../modelos/grafico';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  status!: String;
  postId!: String;
  
  constructor(private http: HttpClient) { }

  public getGrafico():  Observable<Grafico[]>{
    return this.http.get<Grafico[]>("http://localhost:8080/portfolio/v1/habilidades");

  }
    
  public deleteGrafico(id: number) {
    this.http.delete("http://localhost:8080/portfolio/v1/habilidades/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }

  public putGrafico(id: number, grafico: Grafico_aux){
    this.http.put<any>('http://localhost:8080/portfolio/v1/habilidades/'+id, grafico)
    .subscribe(data => this.postId = data.id);
  }

  public postGrafico(grafico: HabilidadesDato ){
    this.http.post<any>('http://localhost:8080/portfolio/v1/habilidadesdatos', grafico)
    .subscribe(data => this.postId = data.id);
  }

}
