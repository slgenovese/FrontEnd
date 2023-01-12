import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result==='Save click'){

        const mail = document.getElementById('correo')!;
        const $clave = document.getElementById('palabraSecreta')!;
        console.log("correo");
        if($clave.nodeValue =='42247476' && mail.nodeValue=='sgenovese@gmail.com'){
          console.log('Cruel');

            }
          }
            this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public ingreso(correo: string){
    console.log(correo);
    this.modalService.activeInstances.closed
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
      console.log('Mundo');
      return 'by clicking on a backdrop';
    } else {
      console.log('Hola');
      return  `with: ${reason}`;
    }
  }



}

