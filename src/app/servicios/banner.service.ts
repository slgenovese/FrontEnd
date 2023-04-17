import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../modelos/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  postId!: String;

  constructor(private http: HttpClient) { }

  public getBanner():  Observable<Banner>{
    return this.http.get<Banner>("http://localhost:8080/portfolio/v1/personas/banner");

  }

  public putBanner(id: number, link_banner: String){
    this.http.put<any>('http://localhost:8080/portfolio/v1/personas/banner/'+id, link_banner)
    .subscribe(data => this.postId = data.id);
  }

  public putFoto(id: number, link_foto: String){
    console.log(link_foto);
    this.http.put<any>('http://localhost:8080/portfolio/v1/personas/foto/'+id, link_foto)
    .subscribe(data => this.postId = data.id);
  }
}
