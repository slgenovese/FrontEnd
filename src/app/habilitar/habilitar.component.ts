import { Component,ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-habilitar',
  templateUrl: './habilitar.component.html',
  styleUrls: ['./habilitar.component.css']
})
export class HabilitarComponent implements AfterViewInit {

  @ViewChild('habilitado') habilitado_aux!:ElementRef;
  @Input() habilitado!: string;
  @Output() valueChange= new EventEmitter<string>();

  
  elegido(habilitado: string){
    this.valueChange.emit(habilitado);
  }

  ngAfterViewInit(): void {
    console.log(this.habilitado);
    this.habilitado_aux.nativeElement.value= this.habilitado;

  }
}
