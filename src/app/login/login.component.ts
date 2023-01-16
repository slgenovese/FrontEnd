import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component'
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

  @Input() mostrar!: AppComponent;



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
            this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public ingreso(correo: string, palabraSecreta: string, btnlogin: any){
    console.log(correo);
    console.log(palabraSecreta);
    if(palabraSecreta=='42247476' && correo=='sgenovese@gmail.com'){
      btnlogin.innerText ='Logout';
      //this.mostrar.mostrar=2;
      //console.log(this.mostrar.mostrar);
      ;
      //mostrar_Botones();
      document.getElementById("ban_Edicion1")!.style.display='block';
      document.getElementById("fot_Edicion1")!.style.display='block';
      document.getElementById("nom_Edicion1")!.style.display='block';
      document.getElementById("ace_Edicion1")!.style.display='block';
      document.getElementById("ace_Borrado1")!.style.display='block';

      var i=0;
        for( let edu of educacion){
          i++;
          document.getElementById("edu_Edicion"+i)!.style.display='block';
          document.getElementById("edu_Borrado"+i)!.style.display='block';
        }
        var i=0;
        for( let exp of experiencia){
          i++;
          document.getElementById("exp_Edicion"+i)!.style.display='block';
          document.getElementById("exp_Borrado"+i)!.style.display='block';
        }
    }

    return;
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
