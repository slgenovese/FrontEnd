import { Component,ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-anios',
  templateUrl: './anios.component.html',
  styleUrls: ['./anios.component.css']
})
export class AniosComponent  implements AfterViewInit {

  @ViewChild('anios') anios_aux!:ElementRef;
  @Input() anio!: string;
  
  elegido(anio: string){
  }

  ngAfterViewInit(): void {

    this.anios_aux.nativeElement.value= this.anio;

  }

}

