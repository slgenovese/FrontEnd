import { Component,ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.css']
})
export class PorcentajeComponent implements AfterViewInit{
  @ViewChild('porcentaje') porcentaje_aux!:ElementRef;
  @Input() porcentaje!: number;
  @Output() valueChange= new EventEmitter<string>();

  elegido(porcentaje: string){
    this.valueChange.emit(porcentaje);
  }

  // Esto es para poner el valor de la provincia
  ngAfterViewInit(): void {
  
    this.porcentaje_aux.nativeElement.value= this.porcentaje;

  }
}

