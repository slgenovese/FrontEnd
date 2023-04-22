import { Component, ViewChild, OnInit, TemplateRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Login } from '../../modelos/Login';
import { LoginService } from '../../servicios/login.service'; 
import { Redes } from '../../modelos/redes';
import { RedesService } from '../../servicios/redes.service';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { BannerService } from 'src/app/servicios/banner.service';
import { Acerca_De } from 'src/app/modelos/acerca-de';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit{

  closeResult: string = '';

  redes: Redes[]=[];
  acerca_De: Acerca_De = new Acerca_De;

  titulo!: string;
  tabla!: string;
  id!: number;
  nombres!: string;
  apellidos!: string;
  cargo_actual!: string;
  pais!: string;
  id_pais!: string; 
  provincia!: string;
  id_provincia!: string;
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
  servidor_img!: string; 
  habilitado!: string;


  editar_registro(quien_llama: any){
    console.log("Se actualizo el registro N°:" + this.id + " de la tabla:" + this.tabla);
    console.log("hola");
    console.log(this.tabla);
    console.log(quien_llama );
    switch (quien_llama){
      case "acerca_de":
        var acerca_de = document.getElementById("acerca") as HTMLTextAreaElement;
        this.acercaDeService.putAcercaDe(this.id, acerca_de.value);
        
        break;
      case "banner":
        this.bannerService.putBanner(this.id, this.imagen);
        break;
      case "foto":
        this.bannerService.putFoto(this.id, this.imagen);
        break;
      case "nombre":
        console.log(this.id);
        this.acerca_De.id=this.id;
        var auxiliar = document.getElementById("path_imagen") as HTMLTextAreaElement;
        this.acerca_De.link_icono=auxiliar.value;
        var auxiliar = document.getElementById("nombre_") as HTMLTextAreaElement;
        this.acerca_De.nombres=auxiliar.value;
        var auxiliar = document.getElementById("apellido_") as HTMLTextAreaElement;
        this.acerca_De.apellidos=auxiliar.value;
        var auxiliar = document.getElementById("cargo") as HTMLTextAreaElement;
        this.acerca_De.cargo_actual=auxiliar.value;
        this.acerca_De.id_pais=this.id_pais;
        this.acerca_De.pais=this.pais;
        this.acerca_De.id_provincia=this.id_provincia;
        this.acerca_De.provincia=this.provincia;
        this.acerca_De.acerca_de= " ";
        console.log(this.acerca_De);
        this.acercaDeService.putAcercaDeFull(this.id, this.acerca_De);
        break;
      default:
        console.log("No llego!!!");
    }
  }
  
  mostrar_servidor_img(){
    window.open( this.servidor_img);
}

cambiar_imagen(nueva_imagen: string){
  this.mdl_editar.elementRef.nativeElement.value=nueva_imagen;
  this.imagen= nueva_imagen;
}

  recibe_habilitado(habilitado: string){
    console.log(habilitado);
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
  }

  recibe_titulo(titulo: string){
    this.titulo=titulo;
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
  pre_open_nombre(tabla: string, id: number, nombres: string, apellidos: string, cargo_actual: string, id_pais: string, pais: string, id_provincia: string, provincia: string, link_icono: string): void{
    this.tabla=tabla;
    this.id=id;
    this.nombres=nombres;
    this.apellidos=apellidos;
    this.cargo_actual=cargo_actual;
    this.id_pais=id_pais;
    this.pais=pais;
    this.id_provincia=id_provincia;
    this.provincia=provincia;
    this.quien_llama='nombre'
    this.titulo = 'Área de Edición - '+ tabla;
    this.imagen=link_icono;
  
    this.open(this.mdl_editar );
  }

  pre_open_experiencia(tabla: string, id: number, imagen: string, texto: string, institucion: string, id_institucion: number, desde: string, hasta: string, id_pais: string, pais: string, id_provincia: string, provincia: string){
    this.tabla=tabla;
  this.id=id; 
  this.imagen=imagen;
  this.texto_aux=texto;
  this.institucion=institucion;
  this.id_institucion=String(id_institucion);
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
  
    this.loginService.getLogin().subscribe(data=>{
      this.password = data.clave;
      this.mail = data.usuario;
      this.servidor_img = data.servidor_img ;
    });

    this.redesService.getRedes().subscribe(data=>{this.redes=data});

  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, private loginService: LoginService, private redesService: RedesService, private acercaDeService: AcercaDeService, private bannerService: BannerService ) {}

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

