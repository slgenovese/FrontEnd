import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../modelos/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  constructor(private http: HttpClient) { }

  public getRedes():  Observable<Redes[]>{
    return this.http.get<Redes[]>(localStorage.getItem('link_Base')+"portfolio/v1/redes");

  }


}
