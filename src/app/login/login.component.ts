import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { educacion } from '../educacion';
import { experiencia } from '../experiencia';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent {


  title = 'appBootstrap';

  closeResult: string = '';




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
  open(content:any, btnlogin: any) {
    if (btnlogin.innerText=='Logout'){
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

  public ingreso(correo: string, palabraSecreta: string, btnlogin: any){
    if(palabraSecreta=='42247476' && correo=='sgenovese@gmail.com'){
      if (btnlogin.innerText=='Login'){
        this.Botones(true);
        btnlogin.innerText ='Logout';
      }
    }

    return;
  }

  Botones(mostrar: boolean){
    let display: string;
    if (mostrar){
      display ='block';
    }else{
      display ='none';
    }
    document.getElementById("ban_Edicion-1")!.style.display=display;
    document.getElementById("fot_Edicion-1")!.style.display=display;
    document.getElementById("nom_Edicion-1")!.style.display=display;
    document.getElementById("ace_Edicion-1")!.style.display=display;
    document.getElementById("ace_Borrado-1")!.style.display=display;

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
    
    var i=0;
      for( let edu of educacion){
        i++;
        document.getElementById("edu_Edicion-"+i)!.style.display=display;
        document.getElementById("edu_Borrado-"+i)!.style.display=display;
      }
      var i=0;
      for( let exp of experiencia){
        i++;
        document.getElementById("exp_Edicion-"+i)!.style.display=display;
        document.getElementById("exp_Borrado-"+i)!.style.display=display;
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
