import { Component, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  closeResult: string = '';

  titulo!: string;
  tabla!: string;
  id!: number;
  nombre_apellido!: string;
  cargo_actual!: string;
  pais!: string;
  provincia!: string;
  texto_aux!: string;
  quien_llama!: string;

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
    console.log(this.texto_aux);
    this.open(this.mdl_editar );
  }
  pre_open_nombre(tabla: string, id: number, nombre_apellido: string, cargo_actual: string, pais: string, provincia: string): void{
    this.tabla=tabla;
    this.id=id;
    this.nombre_apellido=nombre_apellido;
    this.cargo_actual=cargo_actual;
    this.pais=pais;
    this.provincia=provincia;
    this.quien_llama='nombre'
    this.titulo = 'Area de Edición - '+ tabla;
    console.log(this.texto_aux);
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

