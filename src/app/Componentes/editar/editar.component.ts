//import { SweetAlertCustomClass } from './../../../../node_modules/sweetalert2/sweetalert2.d';
import { Component, ViewChild, OnInit, TemplateRef, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../servicios/login.service'; 
import { PersonasRedes } from '../../modelos/redes';
import { Redes } from '../../modelos/redes';
import { RedesService } from '../../servicios/redes.service';
import { BannerService } from 'src/app/servicios/banner.service';
import { Acerca_De } from 'src/app/modelos/acerca-de';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Institucion } from 'src/app/modelos/institucion';
import { Proyectos } from 'src/app/modelos/proyectos';  
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Titulo } from 'src/app/modelos/titulo';
import { Servidor_Imagenes } from 'src/app/modelos/acerca-de';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';
import  Swal from "sweetalert2";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit, AfterContentChecked{

  closeResult: string = '';

  /*
  open(content: any) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then(result => {
            this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  */
  open(content: any) {
    this.modalService.open(content, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
  }

  redes: Redes[]=[]; 
  personasRedes: PersonasRedes[]=[];
  mostrarRedes: PersonasRedes[]=[];
  per_redes: PersonasRedes = new PersonasRedes; 
  acerca_De: Acerca_De = new Acerca_De;
  experiencia: Experiencia = new Experiencia;
  institucion_aux: Institucion = new Institucion;
  proyectos: Proyectos = new Proyectos;
  educacion: Educacion = new Educacion;
  titulo_obj: Titulo = new Titulo;
  servidor_img: Servidor_Imagenes = new Servidor_Imagenes; 
  usuario: Usuario = new Usuario;

  respuesta: boolean=false;
  titulo!: string;
  tabla!: string;
  id!: number;
  nombres!: string;
  apellidos!: string;
  cargo_actual!: string;
  pais!: string;
  provincia!: string;
  texto_aux!: string;
  quien_llama!: string;
  imagen!: string;
  institucion!: string;
  id_institucion!: string;
  periodo!: string;
  desde!: string;
  hasta!: string;
  titulo_aux!: string;
  id_titulo!: string;
  password!: string;
  mail!: string;
  habilitado!: string;
  link_icono!: string;

  editar_registro(quien_llama: any){
    switch (quien_llama){
      case "acerca_de":
        var acerca_de = document.getElementById("acerca") as HTMLTextAreaElement;
        if (this.verificar_registro(quien_llama, acerca_de.value)){
          this.acercaDeService.putAcercaDe(this.id, acerca_de.value);
          this.respuesta=true;
        }
        break;
      case "banner":
        if (this.verificar_registro(quien_llama, this.imagen)){
          this.bannerService.putBanner(this.id, this.imagen);
          this.respuesta=true;
        }
        break;
      case "foto":
        if (this.verificar_registro(quien_llama, this.imagen)){
          this.bannerService.putFoto(this.id, this.imagen);
          this.respuesta=true;
        }  
        break;
      case "nombre":
        this.acerca_De.id=this.id;
        var auxiliar = document.getElementById("path_imagen") as HTMLTextAreaElement;
        this.acerca_De.link_icono=auxiliar.value;
        var auxiliar = document.getElementById("nombre_") as HTMLTextAreaElement;
        this.acerca_De.nombres=auxiliar.value;
        var auxiliar = document.getElementById("apellido_") as HTMLTextAreaElement;
        this.acerca_De.apellidos=auxiliar.value;
        var auxiliar = document.getElementById("cargo") as HTMLTextAreaElement;
        this.acerca_De.cargo_actual=auxiliar.value;
        this.acerca_De.pais=this.pais;
        this.acerca_De.provincia=this.provincia;
        this.acerca_De.acerca_de= " ";
        if (this.verificar_registro(quien_llama, this.acerca_De)){
          this.acercaDeService.putAcercaDeFull(this.id, this.acerca_De);
          this.respuesta=true;
        }
        break;
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
        if (this.verificar_registro(quien_llama, this.experiencia)){
          this.experienciaService.putExperiencia(this.id, this.experiencia);
          this.respuesta=true;
        }
        break;
      case "proyectos":
        this.proyectos.id=this.id;
        this.proyectos.desde=this.desde;
        this.proyectos.hasta=this.hasta;
        var auxiliar = document.getElementById("proyecto") as HTMLTextAreaElement;
        this.proyectos.texto=auxiliar.value;
        this.institucion_aux.id=Number(this.id_institucion);
        this.institucion_aux.institucion=this.institucion;
        this.institucion_aux.link_icono=this.link_icono;
        this.proyectos.institucion=this.institucion_aux;
        if (this.verificar_registro(quien_llama, this.proyectos)){
          this.proyectosService.putProyectos(this.id, this.proyectos);
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
          this.educacionService.putEducacion(this.id, this.educacion);
          this.respuesta=true;
        }    
        break;
      case "redes":
        for(let per_red of this.mostrarRedes){
          var auxiliar=document.getElementById("red-"+per_red.id) as HTMLTextAreaElement;
          if(auxiliar.value!=" "){
            per_red.link=auxiliar.value;
            this.redesService.postPersonasRedes(per_red);
          }
        }
        this.respuesta=true;
        break;
      case "configurar":
          var auxiliar=document.getElementById("path_imagen") as HTMLTextAreaElement;
        this.servidor_img.link_servidor_imagenes=auxiliar.value;
        if (this.verificar_registro(quien_llama, this.servidor_img.link_servidor_imagenes)){
          this.acercaDeService.putServidorImagenes(this.id, this.servidor_img.link_servidor_imagenes);
          this.respuesta=true;
        }  
        break;
      case "contraseña":
        var pass_1 =  document.getElementById("pass_1") as HTMLInputElement;
        var pass_2 = document.getElementById("pass_2") as HTMLInputElement;
        var usu =document.getElementById("usuario") as HTMLInputElement;
        if(pass_1.value==pass_2.value){
          this.usuario.id=this.id;
          this.usuario.password= pass_1.value;
          this.usuario.usuario=usu.value;
          this.usuario.persona_id= Number(localStorage.getItem("persona_id"));
          if (this.verificar_registro(quien_llama, this.usuario)){
            this.usuarioService.putUsuario(this.id, this.usuario);
            this.respuesta=true;
          }
        }
        break;
      default:
    }
//    if (this.respuesta) {window.location.reload()};
    if (this.respuesta) {setTimeout(() => {location.reload()       
    }, 1000); };
}

  verificar_registro (quien_llama: string, registro: any): boolean{
    this.respuesta=false;
    switch (quien_llama){
      case "acerca_de":
        if (registro==""){this.mensaje('El campo ACERCA DE.. no puede estar vacio'); 
        this.respuesta=false;
        return this.respuesta;
      } 
        break;
      case "banner":
        if (registro==""){this.mensaje('El LINK de la imagen no puede estar vacio!'); 
          this.respuesta=false;
          return this.respuesta;
        } 
        break;
      case "foto":
        if (registro==""){this.mensaje('El LINK de la imagen no puede estar vacio!'); 
          this.respuesta=false;
          return this.respuesta;
        } 
        break;
      case "nombre":
        if (registro.link_icono==""){this.mensaje('El LINK de la imagen no puede estar vacio!'); 
          this.respuesta=false;
          return this.respuesta;
        } 
        if (registro.nombres==""){this.mensaje('El campo NOMBRES no puede estar vacio!'); 
          this.respuesta=false;
          return this.respuesta;
        } 
        if (registro.apellidos==""){this.mensaje('El campo APELLIDOS no puede estar vacio!'); 
          this.respuesta=false;
          return this.respuesta;
        }
        if (registro.cargo_actual==""){this.mensaje('El campo CARGO ACTUAL no puede estar vacio!'); 
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
        break;
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
        if (registro.desde==undefined){this.mensaje('El campo DESDE no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.hasta==undefined){this.mensaje('El campo HASTA no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.texto==""){this.mensaje('El campo PROYECTO no puede estar vacio!'); 
        this.respuesta=false;
        return this.respuesta;
        } 
        if (registro.institucion.institucion==undefined){this.mensaje('El campo INSTITUCION no puede estar vacio!'); 
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
    case "contraseña":
      if (registro.usuario==""){this.mensaje('El campo USUARIO no puede estar vacio!'); 
      this.respuesta=false;
      return this.respuesta;
      } 
      if (registro.password==""){this.mensaje('El campo PASSWORD no puede estar vacio!'); 
      this.respuesta=false;
      return this.respuesta;
      } 
      if (registro.password<8){this.mensaje('El PASSWORD no puede tener menos de 8 caracteres!'); 
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

  borrar_red(id: number){
    this.redesService.deletePersonasRedes(id);
    var auxiliar=document.getElementById("red-"+id) as HTMLTextAreaElement;
    auxiliar.value=" ";
  }

  mostrar_servidor_img(){
    window.open( this.servidor_img.link_servidor_imagenes);
}

cambiar_imagen(nueva_imagen: string){
  this.mdl_editar.elementRef.nativeElement.value=nueva_imagen;
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


  //Esto trae el selector #mdl_editar del archivo .html y me permite usarlo como parametro 'content'
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
  pre_open_nombre(tabla: string, id: number, nombres: string, apellidos: string, cargo_actual: string, pais: string, provincia: string, link_icono: string): void{
    this.tabla=tabla;
    this.id=id;
    this.nombres=nombres;
    this.apellidos=apellidos;
    this.cargo_actual=cargo_actual;
    this.pais=pais;
    this.provincia=provincia;
    this.quien_llama='nombre'
    this.titulo = 'Área de Edición - '+ tabla;
    this.imagen=link_icono;
  
    this.open(this.mdl_editar );
  }

  pre_open_experiencia(tabla: string, id: number, imagen: string, texto: string, institucion: string, id_institucion: number, desde: string, hasta: string, pais: string, provincia: string){
  this.tabla=tabla;
  this.id=id; 
  this.imagen=imagen;
  this.texto_aux=texto;
  this.institucion=institucion;
  this.id_institucion=String(id_institucion);
  this.desde=desde;
  this.hasta=hasta;
  this.pais=pais;
  this.provincia=provincia;
  this.quien_llama='experiencia'
  this.titulo = 'Área de Edición - '+ tabla;
  this.open(this.mdl_editar );
}

pre_open_educacion( tabla: string, id: number, imagen: string, titulo: string, id_titulo: number, institucion: string, id_institucion: number, desde: string, hasta: string){
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
  this.open(this.mdl_editar );
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
  
    this.acercaDeService.getServidorImagenes().subscribe(data=>{this.servidor_img=data});
    this.redesService.getPersona_Redes().subscribe(data=>{this.personasRedes=data
    this.redesService.getRedes().subscribe(data=>{this.redes=data
      this.procesarRedes();
    });
  });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  procesarRedes(){
  var encontro = "No";
    for(let red of this.redes){
      for (let per_red of this.personasRedes){
        if(per_red.nombre==red.nombre){
          this.mostrarRedes.push(per_red);
          encontro="Si";
          }     
      }
      if (encontro=="No"){
        let perRedes = new PersonasRedes;
        perRedes.id=red.id;
        perRedes.nombre=red.nombre;
        perRedes.icono=red.icono;
        perRedes.link=" ";
        this.mostrarRedes.push(perRedes);
        }
      encontro="No";
    }
  }
  
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, private loginService: LoginService, 
    private redesService: RedesService, private acercaDeService: AcercaDeService, 
    private bannerService: BannerService, private experienciaService: ExperienciaService,
    private proyectosService: ProyectosService, private educacionService: EducacionService,
    private usuarioService: UsuarioService, private changeDetector: ChangeDetectorRef) {}

  /**
   * Write code on Method
   *
   * @return response()
   */

  
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

