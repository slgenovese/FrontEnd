import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from '../../servicios/educacion.service';
import { Experiencia } from '../../modelos/experiencia';
import { ExperienciaService } from '../../servicios/experiencia.service';
import { Proyectos } from '../../modelos/proyectos';
import { ProyectosService } from '../../servicios/proyectos.service';
import { Login } from 'src/app/modelos/Login';
import { LoginService } from '../../servicios/login.service'; 
import { Respuesta } from 'src/app/modelos/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent implements OnInit{

  title = 'appBootstrap';

  closeResult: string = '';

  password!: string;
  mail!: string;
  servidor_img!: string; 

  educacion: Educacion[] =[];
  experiencia: Experiencia[] =[];
  proyectos: Proyectos[] =[];
  login: Login = new Login;
  respuesta: Respuesta = new Respuesta;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, private loginService: LoginService, private educacionService: EducacionService, private experienciaService: ExperienciaService, private proyectosService: ProyectosService) {}

  
  ngOnInit(): void {

  /*  this.loginService.getLogin().subscribe(data=>{
      this.password = data.password;
      this.mail = data.usuario;
    });
*/
    this.educacionService.getEducacion().subscribe(data=>{this.educacion=data});
    this.experienciaService.getExperiencia().subscribe(data=>{this.experiencia=data});
    this.proyectosService.getProyectos().subscribe(data=>{this.proyectos=data});
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  open(content:any, btnlogin: any) {
    if (btnlogin.innerText=='Logout' || btnlogin.innerText=='Cerrar sesión'){
      this.Botones(false);
      btnlogin.innerText ='Login';
      return;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public ingreso(usuario: string, palabraSecreta: string, btnlogin: any){
    this.login.password=palabraSecreta;
    this.login.usuario=usuario;
    this.loginService.postLogin(this.login).subscribe(async data => {this.respuesta = data
      if(this.respuesta.respuesta== "OK"){
        if (btnlogin.innerText=='Login' || btnlogin.innerText=='Acceso'){
          this.Botones(true);
          btnlogin.innerText ='Logout';
        }else{
          document.getElementById("mensaje")!.style.display="block";
        }
      }
    });
  }

  Botones(mostrar: boolean){
    let display: string;
    if (mostrar){
      display ='block';
    }else{
      display ='none';
    }

    document.getElementById("red_Edicion-1")!.style.display=display;
    document.getElementById("con_Edicion-1")!.style.display=display;
    document.getElementById("ban_Edicion-1")!.style.display=display;
    document.getElementById("fot_Edicion-1")!.style.display=display;
    document.getElementById("nom_Edicion-1")!.style.display=display;
    document.getElementById("ace_Edicion-1")!.style.display=display;
    document.getElementById("ace_Borrado-1")!.style.display=display;

    document.getElementById("gra_Alta")!.style.display=display;

    if (document.getElementById("grafico1")!.style.display==="block"){
      document.getElementById("gra_Borrado-1")!.style.display=display;
      document.getElementById("gra_Edicion-1")!.style.display=display;
    }
    if (document.getElementById("grafico2")!.style.display==="block"){
      document.getElementById("gra_Borrado-2")!.style.display=display;
      document.getElementById("gra_Edicion-2")!.style.display=display;
    }
    if (document.getElementById("grafico3")!.style.display==="block"){
      document.getElementById("gra_Borrado-3")!.style.display=display;
      document.getElementById("gra_Edicion-3")!.style.display=display;
    }
    if (document.getElementById("grafico4")!.style.display==="block"){
      document.getElementById("gra_Borrado-4")!.style.display=display;
      document.getElementById("gra_Edicion-4")!.style.display=display;
    }
    if (document.getElementById("grafico5")!.style.display==="block"){
      document.getElementById("gra_Borrado-5")!.style.display=display;
      document.getElementById("gra_Edicion-5")!.style.display=display;
    }
    if (document.getElementById("grafico6")!.style.display==="block"){
      document.getElementById("gra_Borrado-6")!.style.display=display;
      document.getElementById("gra_Edicion-6")!.style.display=display;
    }
    if (document.getElementById("grafico7")!.style.display==="block"){
      document.getElementById("gra_Borrado-7")!.style.display=display;
      document.getElementById("gra_Edicion-7")!.style.display=display;
    }
    if (document.getElementById("grafico8")!.style.display==="block"){
      document.getElementById("gra_Borrado-8")!.style.display=display;
      document.getElementById("gra_Edicion-8")!.style.display=display;
    }
    
    document.getElementById("edu_Alta")!.style.display=display;

      for( let edu of this.educacion){
        document.getElementById("edu_Edicion-"+edu.id)!.style.display=display;
        document.getElementById("edu_Borrado-"+edu.id)!.style.display=display;
      }

      document.getElementById("exp_Alta")!.style.display=display;

      for( let exp of this.experiencia){
        document.getElementById("exp_Edicion-"+exp.id)!.style.display=display;
        document.getElementById("exp_Borrado-"+exp.id)!.style.display=display;
      }

      document.getElementById("pro_Alta")!.style.display=display;

      for( let pro of this.proyectos){
        document.getElementById("pro_Edicion-"+pro.id)!.style.display=display;
        document.getElementById("pro_Borrado-"+pro.id)!.style.display=display;
      }
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
