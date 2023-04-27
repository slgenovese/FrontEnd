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
    return this.http.get<Banner>(localStorage.getItem('link_Base')+"portfolio/v1/personas/banner");

  }

  public putBanner(id: number, link_banner: String){
    this.http.put<any>(localStorage.getItem('link_Base')+"portfolio/v1/personas/banner/"+id, link_banner)
    .subscribe(data => this.postId = data.id);
  }

  public putFoto(id: number, link_foto: String){
    this.http.put<any>(localStorage.getItem('link_Base')+"portfolio/v1/personas/foto/"+id, link_foto)
    .subscribe(data => this.postId = data.id);
  }

}
