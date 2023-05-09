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
import { Redes } from 'src/app/modelos/redes';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule  } from '@angular/forms';
import  Swal from "sweetalert2";

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit{

//  registerForm!: FormGroup;
//  submitted = false;
  experiencia: Experiencia = new Experiencia;
  institucion_aux: Institucion = new Institucion;
  proyectos: Proyectos = new Proyectos;
  educacion: Educacion = new Educacion;
  titulo_obj: Titulo = new Titulo;
  red: Redes = new Redes;

  closeResult: string = '';

  respuesta: boolean=false;
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
  id_redes!: string;

  alta_registro(quien_llama: any){
    this.respuesta=false;
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
        console.log(this.experiencia);
        if (this.verificar_registro(quien_llama, this.experiencia)){
          this.experienciaService.postExperiencia(this.experiencia);
          this.respuesta=true;
        }
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
        if (this.verificar_registro(quien_llama, this.proyectos)){
          this.proyectosService.postProyectos(this.proyectos);
          this.respuesta=true;
        }
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
        if (this.verificar_registro(quien_llama, this.educacion)){
          this.educacionService.postEducacion(this.educacion);
          this.respuesta=true;
        }
        break;  
      default:
    }
    if (this.respuesta) {window.location.reload()};
  }  

  verificar_registro (quien_llama: string, registro: any): boolean{
    this.respuesta=false;
    switch (quien_llama){
      case "experiencia":
        if (registro.texto==""){this.mensaje('El campo TAREAS REALIZADAS no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.institucion.institucion==undefined){this.mensaje('El campo INSTITUCION no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.desde==undefined){this.mensaje('El campo DESDE no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.hasta==undefined){this.mensaje('El campo HASTA no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.pais==undefined){this.mensaje('El campo PAIS no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.provincia==undefined){this.mensaje('El campo PROVINCIA no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.desde>registro.hasta){this.mensaje('El año DESDE no puede ser mayor al año HASTA!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        break;  
      case "proyectos":
        if (registro.texto==""){this.mensaje('El campo PROYECTO no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.institucion.institucion==undefined){this.mensaje('El campo INSTITUCION no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.desde==undefined){this.mensaje('El campo DESDE no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.hasta==undefined){this.mensaje('El campo HASTA no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.desde>registro.hasta){this.mensaje('El año DESDE no puede ser mayor al año HASTA!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
      break;  
    case "educacion":
      if (registro.titulo.titulo==undefined){this.mensaje('El campo TITULO no puede estar vacio!'); 
      this.respuesta=false;
      return this.respuesta;
      } 
      if (registro.institucion.institucion==undefined){this.mensaje('El campo INSTITUCION no puede estar vacio!'); 
      this.respuesta=false;
      return this.respuesta;
      } 
      if (registro.desde==undefined){this.mensaje('El campo DESDE no puede estar vacio!'); 
      this.respuesta=false;
      return this.respuesta;
      } 
      if (registro.hasta==undefined){this.mensaje('El campo HASTA no puede estar vacio!'); 
      this.respuesta=false;
      return this.respuesta;
      } 
      if (registro.desde>registro.hasta){this.mensaje('El año DESDE no puede ser mayor al año HASTA!'); 
      this.respuesta=false;
      return this.respuesta;
      } 
      break;  
      case "configurar":
        if (registro==""){this.mensaje('El LINK del SERVIDOR DE IMAGENES no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
      } 
      break;  
    default:
    }
    this.respuesta=true;
    return this.respuesta;
}

  mensaje(texto: string){
    Swal.fire({
      icon: 'warning',
      title: 'Algo salio mal!!!',
      text: texto,
      confirmButtonColor: "black",
      iconColor: "yellow",
      background: "rgb(220, 231, 235)",
    })
}
  cambiar_imagen(nueva_imagen: string){
    this.mdl_alta.elementRef.nativeElement.value=nueva_imagen;
    this.imagen= nueva_imagen;
  }

  recibe_pais(pais: string){
    this.pais=pais;
  }

  recibe_provincia(provincia: string){
    this.provincia=provincia;
  }

  recibe_desde(anio_desde: string){
    this.desde=anio_desde;
  }

  recibe_hasta(anio_hasta: string){
    this.hasta=anio_hasta;
  }

  recibe_institucion(institucion: Institucion){
    this.link_icono= institucion.link_icono;
    this.cambiar_imagen(this.link_icono);
    this.id_institucion=String(institucion.id);
    this.institucion=institucion.institucion;
  }  

  recibe_titulo(titulo: Titulo){
    this.titulo_aux=titulo.titulo;
    this.id_titulo=String(titulo.id);
  }

/*  recibe_red(red: Redes){
    this.red=red;
  }*/

  //Esto trae el selector #mdl_alta del archivo .html y me permite usarlo como parametro 'content'
  //de la funcion open()
  @ViewChild('mdl_alta', { read: TemplateRef }) mdl_alta!:TemplateRef<any>;

  pre_open_redes(tabla: string){
    this.tabla=tabla;
    this.quien_llama='redes'
    this.titulo = 'Área de Edición - '+ tabla;
    this.open(this.mdl_alta );
  }

  pre_open_experiencia(){
    this.quien_llama='experiencia'
  this.titulo = 'Área de Alta - '+ this.quien_llama;
  this.open(this.mdl_alta );
}

pre_open_educacion(){
  this.quien_llama='educacion'
  this.titulo = 'Área de Alta - '+ this.quien_llama;
  this.open(this.mdl_alta );
}

pre_open_proyectos(){
  this.quien_llama='proyectos'
  this.titulo = 'Área de Alta - '+ this.quien_llama;
  this.open(this.mdl_alta );
}


ngOnInit(): void {
}

    onSubmit() {
    }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, private loginService: LoginService,
    private experienciaService: ExperienciaService, private proyectosService: ProyectosService,
    private educacionService: EducacionService, private formBuilder: FormBuilder) {}

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


