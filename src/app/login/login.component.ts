import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
function boton_Login(event: any){
  if(document.getElementById('btn_Login')!.textContent == 'Login'){
    document.getElementById("login")!.style.display="block";
  }else{
    document.getElementById('btn_Login')!.innerText="Login";
    //ocultar_Botones();
    event.preventDefault();
  }
};