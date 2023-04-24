import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  status!: String;
  postId!: String;
  
  constructor(private http: HttpClient) { }

  public getEducacion():  Observable<Educacion[]>{
    return this.http.get<Educacion[]>("http://localhost:8080/portfolio/v1/estudios");

  }

  public deleteEducacion(id: number) {
    this.http.delete("http://localhost:8080/portfolio/v1/estudios/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }

  public putEducacion(id: number, educacion: Educacion){
    this.http.put<any>('http://localhost:8080/portfolio/v1/estudios/datos/'+id, educacion)
    .subscribe(data => this.postId = data.id);
  }

}
