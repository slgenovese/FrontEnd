import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  public getEducacion():  Observable<Educacion[]>{
    return this.http.get<Educacion[]>("./assets/educacion.json");

  }

}
