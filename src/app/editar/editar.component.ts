import { Component, ViewChild, Input, ElementRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
import { PaisesComponent } from '../paises/paises.component';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  closeResult: string = '';

  @Input() paises!: PaisesComponent;
//  @ViewChild('paises_2')paises_2!:ElementRef;

  titulo!: string;
  tabla!: string;
  id!: number;
  nombre_apellido!: string;
  cargo_actual!: string;
  pais!: string;
  id_pais: string = 'AR'
  provincia!: string;
  id_provincia: string = 'B'
  texto_aux!: string;
  quien_llama!: string;
  imagen!: string;
  institucion!: string;
  periodo!: string;


  editar_registro(){
    console.log("Se actualizo el registro N°:" + this.id + " de la tabla:" + this.tabla);

  }

  


  //Esto trae el selector #mdl_borrar del archivo .html y me permite usarlo como parametro 'content'
  //de la funcion open()
  @ViewChild('mdl_editar', { read: TemplateRef }) mdl_editar!:TemplateRef<any>;

  //Esta funcion es llamada desde otro componente, accede al 'content' y ejecuta la funcion open()
  pre_open_acerca_de(tabla: string, id: number, texto: string): void{
    this.tabla=tabla;
    this.id=id;
    this.texto_aux=texto;
    this.quien_llama='acerca_de'
    this.titulo = 'Area de Edición - '+ tabla;
    this.open(this.mdl_editar );
  }
  pre_open_nombre(tabla: string, id: number, nombre_apellido: string, cargo_actual: string, id_pais: string, pais: string, id_provincia: string, provincia: string, imagen: string): void{
    this.tabla=tabla;
    this.id=id;
    this.nombre_apellido=nombre_apellido;
    this.cargo_actual=cargo_actual;
    this.id_pais=id_pais;
    this.pais=pais;
    this.id_provincia=id_provincia;
    this.provincia=provincia;
    this.quien_llama='nombre'
    this.titulo = 'Area de Edición - '+ tabla;
    this.imagen=imagen;
  
    this.open(this.mdl_editar );
  }

  pre_open_experiencia(tabla: string, id: number, imagen: string, texto: string, institucion: string, periodo: string, id_pais: string, pais: string, id_provincia: string, provincia: string){
    this.tabla=tabla;
    this.imagen=imagen;
    this.texto_aux=texto;
    this.institucion=institucion;
    this.periodo=periodo;
    this.id_pais=id_pais;
    this.pais=pais;
    this.id_provincia=id_provincia;
    this.provincia=provincia;
    this.quien_llama='experiencia'
    this.titulo = 'Area de Edición - '+ tabla;
    this.open(this.mdl_editar );
  }


  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  open(content:any) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



}

