import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { Redes } from '../../modelos/redes';
import { RedesService } from '../../servicios/redes.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})

export class RedesComponent implements OnInit{

  redes: Redes[] =[];

  constructor(private redesService: RedesService) {}

  @ViewChild('redes') red_aux!:ElementRef;
  @Input() id_redes!: string;
  @Output() valueChange= new EventEmitter<any>();

  elegido(red_aux: string){
    for(let red of this.redes){
      if (red.id==Number(red_aux)){
        this.valueChange.emit(red);
      }
    }
  }  

  ngOnInit(): void {

    this.redesService.getRedes().subscribe(data=>{this.redes=data
      this.procesar(this.redes);
      this.red_aux.nativeElement.value= this.id_redes;
    });
  }

  procesar(red: Redes[]){

    const select = document.getElementById("red");
    for(let red_aux of red){
      var option= document.createElement("option");
      option.value = String(red_aux.id);
      option.text = red_aux.nombre;
      select?.appendChild(option);
    }
  }

}
