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
    console.log(correo);
    console.log(palabraSecreta);
    if(palabraSecreta=='42247476' && correo=='sgenovese@gmail.com'){
      console.log(btnlogin.innerText );
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
