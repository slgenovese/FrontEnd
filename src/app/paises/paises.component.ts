import { Component,ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements AfterViewInit {

  @ViewChild('paises') paises_aux!:ElementRef;
  @Input() paises!: EditarComponent;

  elegido(pais: string){
    console.log(this.paises_aux);
  }

  ngAfterViewInit(): void {

    this.paises_aux.nativeElement.value= this.paises.pais;
    console.log(this.paises.pais);

  }

}
