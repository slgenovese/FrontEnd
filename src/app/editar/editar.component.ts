import { Component, ViewChild, Input, ElementRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
import { PaisesComponent } from '../paises/paises.component';
import { AniosComponent } from '../anios/anios.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent {

  closeResult: string = '';

//  @Input() paises!: PaisesComponent;

//@ViewChild('Paises', {read: true, static: true}) pais_elegido!:PaisesComponent;
//@ViewChild(AniosComponent) anios_elegidos!:AniosComponent;


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
  desde!: string;
  hasta!: string;
  titulo_aux!: string;
  etiqueta!: string[];
  porcentaje!: number[];
  color_Fondo!: string[];
  color_Borde!: string[];


  editar_registro(){
  //  console.log(this.anios_elegidos);
  
  //console.log(this.pais_elegido.prueba);

  console.log("Se actualizo el registro N°:" + this.id + " de la tabla:" + this.tabla);

  }

  recibe_dato(id_pais: string){
    console.log(id_pais);
    
  }


  //Esto trae el selector #mdl_borrar del archivo .html y me permite usarlo como parametro 'content'
  //de la funcion open()
  @ViewChild('mdl_editar', { read: TemplateRef }) mdl_editar!:TemplateRef<any>;


  pre_open_banner(tabla: string, id: number, banner: string){
    this.tabla=tabla;
    this.id=id;
    this.imagen=banner;
    this.quien_llama='banner'
    this.titulo = 'Area de Edición - banner';
    this.open(this.mdl_editar );
  }

  pre_open_foto(tabla: string, id: number, foto: string){
    this.tabla=tabla;
    this.id=id;
    this.imagen=foto;
    this.quien_llama='foto'
    this.titulo = 'Area de Edición - foto';
    this.open(this.mdl_editar );
  }

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

  pre_open_experiencia(tabla: string, id: number, imagen: string, texto: string, institucion: string, desde: string, hasta: string, id_pais: string, pais: string, id_provincia: string, provincia: string){
    this.id=id; 
    this.tabla=tabla;
    this.imagen=imagen;
    this.texto_aux=texto;
    this.institucion=institucion;
    this.desde=desde;
    this.hasta=hasta;
    this.id_pais=id_pais;
    this.pais=pais;
    this.id_provincia=id_provincia;
    this.provincia=provincia;
    this.quien_llama='experiencia'
    this.titulo = 'Area de Edición - '+ tabla;
    this.open(this.mdl_editar );
  }

  pre_open_educacion( tabla: string, id: number, imagen: string, titulo: string, institucion: string, desde: string, hasta: string){
    this.id=id; 
    this.tabla=tabla;
    this.imagen=imagen;
    this.titulo_aux=titulo;
    this.institucion=institucion;
    this.desde=desde;
    this.hasta=hasta;
    this.quien_llama='educacion'
    this.titulo = 'Area de Edición - '+ tabla;
    this.open(this.mdl_editar );
  }

  pre_open_grafico(tabla: string, id: number, titulo: string , etiqueta: string[], porcentaje: number[], color_Fondo: string[], color_Borde: string[]){
    this.id=id; 
    this.tabla=tabla;
    this.titulo_aux=titulo;
    this.etiqueta=etiqueta;
    this.porcentaje=porcentaje;
    this.color_Fondo=color_Fondo;
    this.color_Borde=color_Borde;
    this.quien_llama='grafico'
    this.titulo = 'Area de Edición - Hard & Soft Skills';
    this.open(this.mdl_editar );
  }

  cambiar_imagen(imagen: string){
    //this.img.nativeElement.value=document.getElementById('imagen');
    console.log(imagen);
    this.imagen= imagen;
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

