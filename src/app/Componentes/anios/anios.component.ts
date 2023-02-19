import { Component,ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-anios',
  templateUrl: './anios.component.html',
  styleUrls: ['./anios.component.css']
})
export class AniosComponent  implements AfterViewInit {

  @ViewChild('anios') anios_aux!:ElementRef;
  @Input() anio!: string;
  @Output() valueChange= new EventEmitter<string>();

  elegido(anio: string){
    this.valueChange.emit(anio);
  }

  ngAfterViewInit(): void {

    this.anios_aux.nativeElement.value= this.anio;

  }

}

