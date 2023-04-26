import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/servicios/login.service';
import { Institucion } from 'src/app/modelos/institucion';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Titulo } from 'src/app/modelos/titulo';
@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit{

  experiencia: Experiencia = new Experiencia;
  institucion_aux: Institucion = new Institucion;
  proyectos: Proyectos = new Proyectos;
  educacion: Educacion = new Educacion;
  titulo_obj: Titulo = new Titulo;

  closeResult: string = '';

  titulo!: string;
  id_titulo!: string;
  tabla!: string;
  id!: number;
  pais!: string;
  provincia!: string;
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
  link_icono!: string;

  alta_registro(quien_llama: any){
    switch (quien_llama){
      case "experiencia":
        this.experiencia.id=this.id;
        this.experiencia.desde=this.desde;
        this.experiencia.hasta=this.hasta;
        this.experiencia.pais=this.pais;
        this.experiencia.provincia=this.provincia;
        var auxiliar = document.getElementById("tareas") as HTMLTextAreaElement;
        this.experiencia.texto=auxiliar.value;
        this.institucion_aux.id=Number(this.id_institucion);
        this.institucion_aux.institucion=this.institucion;
        this.institucion_aux.link_icono=this.link_icono;
        this.experiencia.institucion=this.institucion_aux;
        this.experienciaService.postExperiencia(this.experiencia);
        break;
      case "proyectos":
        this.proyectos.id=this.id;
        this.proyectos.desde=this.desde;
        this.proyectos.hasta=this.hasta;
        var auxiliar = document.getElementById("titulo") as HTMLTextAreaElement;
        this.proyectos.texto=auxiliar.value;
        this.institucion_aux.id=Number(this.id_institucion);
        this.institucion_aux.institucion=this.institucion;
        this.institucion_aux.link_icono=this.link_icono;
        this.proyectos.institucion=this.institucion_aux;
        this.proyectosService.postProyectos(this.proyectos);
        break;
      case "educacion":
        this.educacion.id=this.id;
        this.educacion.desde=this.desde;
        this.educacion.hasta=this.hasta;
        this.institucion_aux.id=Number(this.id_institucion);
        this.institucion_aux.institucion=this.institucion;
        this.institucion_aux.link_icono=this.link_icono;
        this.educacion.institucion=this.institucion_aux;
        this.titulo_obj.id=Number(this.id_titulo);
        this.titulo_obj.titulo=this.titulo_aux;
        this.educacion.titulo=this.titulo_obj;
        console.log(this.educacion);
        this.educacionService.postEducacion(this.educacion);
        break;  
      default:
    }
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

  recibe_pais(pais: string){
    console.log(pais);
    this.pais=pais;
  }

  recibe_provincia(provincia: string){
    console.log(provincia);
    this.provincia=provincia;
  }

  recibe_desde(anio_desde: string){
    console.log("desde: "+anio_desde);
    this.desde=anio_desde;
  }

  recibe_hasta(anio_hasta: string){
    console.log("hasta: "+anio_hasta);
    this.hasta=anio_hasta;
  }

/*  recibe_institucion(institucion: string){
    var parseado = institucion.split(",",3);
    this.link_icono=parseado[0];
    this.cambiar_imagen(parseado[0]);
    this.id_institucion=parseado[1];
    this.institucion=parseado[3];
    console.log(this.institucion);
  }*/  

  recibe_institucion(institucion: Institucion){
    this.link_icono= institucion.link_icono;
    this.cambiar_imagen(this.link_icono);
    this.id_institucion=String(institucion.id);
    this.institucion=institucion.institucion;
    console.log(this.institucion);
  }  

  recibe_titulo(titulo: Titulo){
    this.titulo_aux=titulo.titulo;
    this.id_titulo=String(titulo.id);
  }

  //Esto trae el selector #mdl_alta del archivo .html y me permite usarlo como parametro 'content'
  //de la funcion open()
  @ViewChild('mdl_alta', { read: TemplateRef }) mdl_alta!:TemplateRef<any>;


  //pre_open_experiencia(tabla: string, id: number, imagen: string, texto: string, institucion: string, id_institucion: number, desde: string, hasta: string, id_pais: string, pais: string, id_provincia: string, provincia: string){
  pre_open_experiencia(){
    this.quien_llama='experiencia'
  this.titulo = 'Área de Alta - '+ this.quien_llama;
  this.open(this.mdl_alta );
}

pre_open_educacion(){
  this.quien_llama='educacion'
  this.titulo = 'Área de Edición - '+ this.quien_llama;
  this.open(this.mdl_alta );
}

pre_open_proyectos(){
  this.quien_llama='proyectos'
  this.titulo = 'Área de Edición - '+ this.quien_llama;
  this.open(this.mdl_alta );
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
  constructor(private modalService: NgbModal, private loginService: LoginService,
    private experienciaService: ExperienciaService, private proyectosService: ProyectosService,
    private educacionService: EducacionService) {}

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


