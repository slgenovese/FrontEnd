import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonasRedes } from '../modelos/redes';
import { Redes } from '../modelos/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  status!: String;
  postId!: String;

  constructor(private http: HttpClient) { }

  public getPersona_Redes():  Observable<PersonasRedes[]>{
    return this.http.get<PersonasRedes[]>(localStorage.getItem('link_Base')+"portfolio/v1/personas_redes");

  }

  public getRedes():  Observable<Redes[]>{
    return this.http.get<Redes[]>(localStorage.getItem('link_Base')+"portfolio/v1/redes");

  }

  public postPersonasRedes(personasRedes: PersonasRedes){
    this.http.post<any>(localStorage.getItem('link_Base')+"portfolio/v1/personas_redes/"+ localStorage.getItem("persona_id"), personasRedes)
    .subscribe(data => this.postId = data.id);
  }

  public deletePersonasRedes(id: number) {
    this.http.delete(localStorage.getItem('link_Base')+"portfolio/v1/personas_redes/"+id)
    .subscribe(() => this.status = 'Delete successful');
  }

}
