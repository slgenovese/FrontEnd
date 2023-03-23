import { Component,ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.css']
})
export class PorcentajeComponent implements AfterViewInit, OnChanges{
  @ViewChild('porcentaje', {static: true}) porcentaje_aux!:ElementRef;
  @Input() porcentaje!: number;
  @Output() valueChange= new EventEmitter<string>();

  elegido(porcentaje: string){
    this.valueChange.emit(porcentaje);
  }

  ngOnChanges(changes: SimpleChanges): void {
//    console.log(changes);
    this.porcentaje = changes['porcentaje'].currentValue;
    this.porcentaje_aux.nativeElement.value= this.porcentaje;
//    document.getElementById('porcentaje')!.setAttribute('value', this.porcentaje.toString() );
    }
    


  // Esto es para poner el valor del porcentaje
  ngAfterViewInit(): void {
  
    this.porcentaje_aux.nativeElement.value= this.porcentaje;

  }
}

