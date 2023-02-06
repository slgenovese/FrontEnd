import { Component,ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
//import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements AfterViewInit{
  @ViewChild('provincias') provincias_aux!:ElementRef;
  @Input() id_provincia!: string;
  @Input() id_pais!: string;
  @Output() valueChange= new EventEmitter<string>();

  elegido(provincia: string){
    this.valueChange.emit(provincia);
  }

  // Esto es para poner el valor de la provincia
  ngAfterViewInit(): void {
  
    this.provincias_aux.nativeElement.value= this.id_provincia;

  }
}
