import { Component,ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements AfterViewInit{
  @ViewChild('provincias') provincias_aux!:ElementRef;
  @Input() id_provincia!: string;
  @Input() id_pais!: string;

  ngAfterViewInit(): void {
  
    console.log(this.provincias_aux.nativeElement.value);
    //this.p.editar_registro();
    this.provincias_aux.nativeElement.value= this.id_provincia;
    console.log(this.id_provincia);

  }
}
