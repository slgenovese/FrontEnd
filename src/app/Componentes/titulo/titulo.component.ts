import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { Titulo } from 'src/app/modelos/titulo';
import { TituloService } from 'src/app/servicios/titulo.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit{

  @ViewChild('titulo') titulo_aux!:ElementRef;
  @Input() id_titulo!: string;
  @Output() valueChange= new EventEmitter<string>();

  
  elegido(titulo: string){
    this.valueChange.emit(titulo);
    for(let tit of this.titulo){
      if (tit.id==Number(titulo)){
        this.valueChange.emit(tit.titulo+","+tit.id);
      }
    }


  }  

  titulo: Titulo[]=[];

  constructor(private tituloService: TituloService) {}

  ngOnInit(): void {
    this.tituloService.getTitulo().subscribe(data=>{this.titulo=data
      this.procesar(this.titulo);
      this.titulo_aux.nativeElement.value= this.id_titulo;
    });
  }

  procesar(titulo: Titulo[]){

    const select = document.getElementById("titulo");
    for(let tit of titulo){
      var option= document.createElement("option");
      option.value = String(tit.id);
      option.text = tit.titulo;
      select?.appendChild(option);
    }
  }

}
