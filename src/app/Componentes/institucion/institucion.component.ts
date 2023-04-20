import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { Institucion } from 'src/app/modelos/institucion';
import { InstitucionService} from 'src/app/servicios/institucion.service';
@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.css']
})
export class InstitucionComponent implements OnInit{

  @ViewChild('institucion') institucion_aux!:ElementRef;
  @Input() id_institucion!: string;
  @Output() valueChange= new EventEmitter<string>();

  
  elegido(institucion: string){
    this.valueChange.emit(institucion);
  }  

  institucion: Institucion[]=[];

  constructor(private institucionService: InstitucionService) {}

  ngAfterViewInit(): void {

    this.institucion_aux.nativeElement.value= this.id_institucion;

  }

  ngOnInit(): void {
    this.institucionService.getInstitucion().subscribe(data=>{this.institucion=data
      this.procesar(this.institucion);
    });
  }

  procesar(institucion: Institucion[]){

    const select = document.getElementById("institucion");
    for(let inst of institucion){
      var option= document.createElement("option");
      option.value = inst.institucion;
      option.text = inst.institucion;
      select?.appendChild(option);
    }
  }
}
