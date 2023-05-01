import { Component, Input, OnInit } from '@angular/core';
import { PersonasRedes } from '../../modelos/redes';
import { RedesService } from '../../servicios/redes.service';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-personas-redes',
  templateUrl: './personas-redes.component.html',
  styleUrls: ['./personas-redes.component.css']
})
export class PersonasRedesComponent {

  personasRedes: PersonasRedes[] =[];

  constructor(private redesService: RedesService) {}

  @Input()  editar!: EditarComponent;

  ngOnInit(): void {
    this.redesService.getPersona_Redes().subscribe(data=>{this.personasRedes=data
    console.log(this.personasRedes);
    });
  }

  irEnlace(link: string){
    window.open(link);
  }
}
