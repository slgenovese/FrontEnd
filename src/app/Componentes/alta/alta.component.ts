import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/servicios/login.service';
import { Institucion } from 'src/app/modelos/institucion';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit{

  closeResult: string = '';

  titulo!: string;
  id_titulo!: string;
  tabla!: string;
  id!: number;
  pais!: string;
  id_pais!: string; 
  provincia!: string;
  id_provincia!: string;
  texto_aux!: string;
  quien_llama!: string;
  imagen!: string;
  institucion!: string;
  id_institucion!: string;
  desde!: string;
  hasta!: string;
  titulo_aux!: string;
  password!: string;
  mail!: string;
  servidor_img!: string;

  alta_registro(quien_llama: any){

  }
/*
  mostrar_servidor_img(){
    window.open( this.servidor_img);
  }
*/
  cambiar_imagen(nueva_imagen: string){
    console.log(nueva_imagen);
    this.mdl_alta.elementRef.nativeElement.value=nueva_imagen;
    this.imagen= nueva_imagen;
  }

  recibe_pais(id_pais: string){
    console.log(id_pais);
    this.id_pais=id_pais;
  }

  recibe_provincia(id_provincia: string){
    console.log(id_provincia);
    this.id_provincia=id_provincia;
  }

  recibe_desde(anio_desde: string){
    console.log("desde: "+anio_desde);
  }

  recibe_hasta(anio_hasta: string){
    console.log("hasta: "+anio_hasta);
  }

  recibe_institucion(institucion: string){
    this.institucion=institucion;
    this.cambiar_imagen(institucion);
  }

  recibe_titulo(titulo: string){
    this.titulo=titulo;
  }

  //Esto trae el selector #mdl_alta del archivo .html y me permite usarlo como parametro 'content'
  //de la funcion open()
  @ViewChild('mdl_alta', { read: TemplateRef }) mdl_alta!:TemplateRef<any>;


  //pre_open_experiencia(tabla: string, id: number, imagen: string, texto: string, institucion: string, id_institucion: number, desde: string, hasta: string, id_pais: string, pais: string, id_provincia: string, provincia: string){
  pre_open_experiencia(tabla: string=""){
  this.tabla=tabla;
  /*this.id=id; 
  this.imagen=imagen;
  this.texto_aux=texto;
  this.institucion=institucion;
  this.id_institucion=String(id_institucion);
  this.desde=desde;
  this.hasta=hasta;
  this.id_pais=id_pais;
  this.pais=pais;
  this.id_provincia=id_provincia;
  this.provincia=provincia;*/
  this.quien_llama='experiencia'
  this.titulo = 'Área de Alta - '+ tabla;
  console.log("Pre_Open")
  this.open(this.mdl_alta );
}

pre_open_educacion( tabla: string, id: number, imagen: string, titulo: string, id_titulo: number, institucion: string, id_institucion: number, desde: string, hasta: string){
  console.log("llega a Educacion");
  this.tabla=tabla;
  this.id=id; 
  this.imagen=imagen;
  this.titulo_aux=titulo;
  this.id_titulo=String(id_titulo);
  this.institucion=institucion;
  this.id_institucion=String(id_institucion);
  this.desde=desde;
  this.hasta=hasta;
  this.quien_llama='educacion'
  this.titulo = 'Área de Edición - '+ tabla;
//  this.open(this.mdl_alta );
}

pre_open_proyectos( tabla: string, id: number, imagen: string, titulo: string, institucion: string, id_institucion: number, desde: string, hasta: string){
  this.tabla=tabla;
  this.id=id; 
  this.imagen=imagen;
  this.titulo_aux=titulo;
  this.institucion=institucion;
  this.id_institucion=String(id_institucion);
  this.desde=desde;
  this.hasta=hasta;
  this.quien_llama='proyectos'
  this.titulo = 'Área de Edición - '+ tabla;
//  this.open(this.mdl_alta );
}


ngOnInit(): void {
  
  this.loginService.getLogin().subscribe(data=>{
    this.password = data.clave;
    this.mail = data.usuario;
    this.servidor_img = data.servidor_img ;
  });

  //this.redesService.getRedes().subscribe(data=>{this.redes=data});

}

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, private loginService: LoginService) {}

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


