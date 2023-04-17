import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grafico } from '../modelos/grafico';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  status!: String;
  
  constructor(private http: HttpClient) { }

  public getGrafico():  Observable<Grafico[]>{
    return this.http.get<Grafico[]>("http://localhost:8080/portfolio/v1/habilidades");

  }
    
  public deleteGrafico(id: number) {
    this.http.delete("http://localhost:8080/portfolio/v1/habilidades/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }

}
