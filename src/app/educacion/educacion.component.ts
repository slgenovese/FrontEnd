import { Component, OnInit } from '@angular/core';
import { educacion } from '../educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion = educacion;
 
  ngOnInit(): void {

  }
}
