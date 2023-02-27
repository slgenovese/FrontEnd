import { Component,ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.css']
})
export class PorcentajeComponent implements AfterViewInit{
  @ViewChild('porcentaje', {static: true}) porcentaje_aux!:ElementRef;
  @Input() porcentaje!: number;
  @Output() valueChange= new EventEmitter<string>();

  elegido(porcentaje: string){
    this.valueChange.emit(porcentaje);
  }

  public actualizar_porcentaje(porcentaje: number){
    console.log("Llego a la funcion");
    this.porcentaje=porcentaje;
    this.porcentaje_aux.nativeElement.value= this.porcentaje;
//    document.getElementById('porcentaje')!.setAttribute('value', porcentaje.toString(10) );
  }

  // Esto es para poner el valor del porcentaje
  ngAfterViewInit(): void {
  
    this.porcentaje_aux.nativeElement.value= this.porcentaje;

  }
}

