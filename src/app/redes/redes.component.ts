import { Component, Input, OnInit } from '@angular/core';
//import { redes } from '../redes';
import { Redes } from '../modelo/redes';
import { RedesService } from '../servicios/redes.service';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})

export class RedesComponent implements OnInit{
//  redes = redes;

  redes: Redes[] =[];

  constructor(private redesService: RedesService) {}

  @Input()  editar!: EditarComponent;

  ngOnInit(): void {
    this.redesService.getRedes().subscribe(data=>{this.redes=data});
  }

  irEnlace(link: string){
    window.open(link);
  }
}
