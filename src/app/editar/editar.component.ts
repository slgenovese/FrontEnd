import { Component, ViewChild, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
import { login } from '../Login';
import { redes }  from '../redes';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit{

  closeResult: string = '';
  login=login;
  redes=redes;
//  @Input() paises!: PaisesComponent;

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
  password!: string;
  mail!: string;
  servidor_img!: string; 
  habilitado!: string;


  editar_registro(){

  console.log("Se actualizo el registro N°:" + this.id + " de la tabla:" + this.tabla);

  }

  mostrar_servidor_img(){
    window.open( this.servidor_img);
}

  cambiar_imagen(nueva_imagen: string){
    this.mdl_editar.elementRef.nativeElement.value=nueva_imagen;
    this.imagen= nueva_imagen;
    console.log(nueva_imagen);
  }

  recibe_habilitado(habilitado: string){
    console.log(habilitado);
  }

  recibe_pais(id_pais: string){
    console.log(id_pais);
  }

  recibe_provincia(id_provincia: string){
    console.log(id_provincia);
  }

  recibe_desde(anio_desde: string){
    console.log("desde: "+anio_desde);
  }

  recibe_hasta(anio_hasta: string){
    console.log("hasta: "+anio_hasta);
  }


  //Esto trae el selector #mdl_borrar del archivo .html y me permite usarlo como parametro 'content'
  //de la funcion open()
  @ViewChild('mdl_editar', { read: TemplateRef }) mdl_editar!:TemplateRef<any>;

  pre_open_redes(tabla: string){
    this.tabla=tabla;
    this.quien_llama='redes'
    this.titulo = 'Área de Edición - '+ tabla;
    this.open(this.mdl_editar );
  }


  pre_open_banner(tabla: string, id: number, banner: string){
    this.tabla=tabla;
    this.id=id;
    this.imagen=banner;
    this.quien_llama='banner'
    this.titulo = 'Área de Edición - banner';
    this.open(this.mdl_editar );
  }

  pre_open_foto(tabla: string, id: number, foto: string){
    this.tabla=tabla;
    this.id=id;
    this.imagen=foto;
    this.quien_llama='foto'
    this.titulo = 'Área de Edición - foto';
    this.open(this.mdl_editar );
  }

  //Esta funcion es llamada desde otro componente, accede al 'content' y ejecuta la funcion open()
  pre_open_acerca_de(tabla: string, id: number, texto: string): void{
    this.tabla=tabla;
    this.id=id;
    this.texto_aux=texto;
    this.quien_llama='acerca_de'
    this.titulo = 'Área de Edición - '+ tabla;
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
    this.titulo = 'Área de Edición - '+ tabla;
    this.imagen=imagen;
  
    this.open(this.mdl_editar );
  }

  pre_open_experiencia(tabla: string, id: number, imagen: string, texto: string, institucion: string, desde: string, hasta: string, id_pais: string, pais: string, id_provincia: string, provincia: string){
    this.tabla=tabla;
    this.id=id; 
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
    this.titulo = 'Área de Edición - '+ tabla;
    this.open(this.mdl_editar );
  }

  pre_open_educacion( tabla: string, id: number, imagen: string, titulo: string, institucion: string, desde: string, hasta: string){
    this.tabla=tabla;
    this.id=id; 
    this.imagen=imagen;
    this.titulo_aux=titulo;
    this.institucion=institucion;
    this.desde=desde;
    this.hasta=hasta;
    this.quien_llama='educacion'
    this.titulo = 'Área de Edición - '+ tabla;
    this.open(this.mdl_editar );
  }

  pre_open_grafico(tabla: string, id: number, titulo: string , etiqueta: string[], porcentaje: number[], color_Fondo: string[], color_Borde: string[]){
    this.tabla=tabla;
    this.id=id; 
    this.titulo_aux=titulo;
    this.etiqueta=etiqueta;
    this.porcentaje=porcentaje;
    this.color_Fondo=color_Fondo;
    this.color_Borde=color_Borde;
    this.quien_llama='grafico'
    this.titulo = 'Área de Edición - Hard & Soft Skills';
    this.open(this.mdl_editar );
  }
  pre_open_configurar(tabla: string, id: number){
    this.tabla=tabla;
    this.id=id; 
    this.quien_llama='configurar'
    this.titulo = 'Área de Edición - configurar';
    this.open(this.mdl_editar );
  }

  ngOnInit(): void {
    for(let login of this.login){
      this.password = login.clave
      this.mail = login.usuario
      this.servidor_img = login.servidor_img ; 
    }
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

