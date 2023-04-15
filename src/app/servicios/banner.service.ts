import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../modelos/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  public getBanner():  Observable<Banner>{
    return this.http.get<Banner>("http://localhost:8080/portfolio/v1/personas/banner");

  }
}
