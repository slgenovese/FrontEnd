import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  postId!: String;

  constructor(private http: HttpClient) { }

  public putUsuario(id: number, usuario: Usuario){
    this.http.put<any>(localStorage.getItem('link_Base')+"portfolio/v1/usuarios/"+id, usuario)
    .subscribe(data => this.postId = data.id);
  }


}
