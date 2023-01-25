import { Component,ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements AfterViewInit {

  @ViewChild('paises') paises_aux!:ElementRef;
  @Input() id_pais!: string;
  
  elegido(pais: string){
    console.log(this.paises_aux);
  }

  ngAfterViewInit(): void {

    console.log(this.paises_aux.nativeElement.value);
    //this.p.editar_registro();
    this.paises_aux.nativeElement.value= this.id_pais;
    console.log(this.id_pais);

  }

}
