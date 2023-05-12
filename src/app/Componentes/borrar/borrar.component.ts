import { Component, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { GraficoService } from 'src/app/servicios/grafico.service';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
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
  objeto!: any;

  constructor(private modalService: NgbModal, private proyectosService: ProyectosService, private educacionService: EducacionService, private experienciaService: ExperienciaService, private graficoService: GraficoService, private acercaDeService: AcercaDeService) {}
    
  borrar_registro(){
    switch(this.tabla){
      case "proyecto":
        this.proyectosService.deleteProyectos(this.id);
        break;
      case "educacion":
        this.educacionService.deleteEducacion(this.id);
        break;
      case "experiencia":
        this.experienciaService.deleteExperiencia(this.id);
        break;
        case "grafico":
          this.graficoService.deleteGrafico(this.id);
          break;
        case "acerca-de":
          this.objeto.acerca_de=" ";
          this.acercaDeService.putAcercaDe(this.id, " ");
          break;
        default:
    }
//    window.location.reload();
  }



  //Esto trae el selector #mdl_borrar del archivo .html y me permite usarlo como parametro 'content'
  //de la funcion open() 
  @ViewChild('mdl_borrar', { read: TemplateRef }) mdl_borrar!:TemplateRef<any>;

  //Esta funcion es llamada desde otro componente, accede al 'content' y ejecuta la funcion open()
  pre_open(tabla: string, id: number, texto: string, objeto: any): void{

    this.tabla=tabla;
    this.id=id;
    this.texto=texto;
    this.objeto=objeto;
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






