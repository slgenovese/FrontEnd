import { Component, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {

  closeResult: string = '';
  
  titulo!: string;
  tabla!: string;
  id!: number;
  texto!: string;

  borrar_registro(){
    console.log("Se borro el registro N°:" + this.id + " de la tabla:" + this.tabla);
  }



  //Esto trae el selector #mdl_borrar del archivo .html y me permite usarlo como parametro 'content'
  //de la funcion open() 
  @ViewChild('mdl_borrar', { read: TemplateRef }) mdl_borrar!:TemplateRef<any>;

  //Esta funcion es llamada desde otro componente, accede al 'content' y ejecuta la funcion open()
  pre_open(tabla: string, id: number, texto: string): void{

    this.tabla=tabla;
    this.id=id;
    this.texto=texto;
    if(tabla==='grafico'){
      this.titulo = 'Area de Borrado - Hard & Soft Skills';
    }else{
      this.titulo = 'Area de Borrado - '+ tabla;
    }
    this.open(this.mdl_borrar );
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
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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






