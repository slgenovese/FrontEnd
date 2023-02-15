import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelo/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  public getAcercaDe():  Observable<Educacion[]>{
    return this.http.get<Educacion[]>("./assets/educacion.json");

  }

}
