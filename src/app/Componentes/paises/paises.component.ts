import { Component,ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements AfterViewInit {

  @ViewChild('paises') paises_aux!:ElementRef;
  @Input() pais!: string;
  @Output() valueChange= new EventEmitter<string>();

  
  elegido(pais: string){
    this.valueChange.emit(pais);
  }

  ngAfterViewInit(): void {

    this.paises_aux.nativeElement.value= this.pais;

  }

}
