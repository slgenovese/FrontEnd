import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'FrontEnd';

  constructor() {}

}

/*
window.onload = function inicializar(){
  document.getElementById('btn_Login')!.innerText="Login";
  //ocultar_Botones();
   
  };
*/
function ocultar_Botones(){
  for(var i=0;i<8;i++){
    document.getElementById('btnEdicion_'+i)!.style.display='none';
  }
  for(i=0;i<5;i++){
    document.getElementById('btnBorrado_'+i)!.style.display='none';
  }
};

function boton_Login(event: any){
  if(document.getElementById('btn_Login')!.textContent == 'Login'){
    document.getElementById("login")!.style.display="block";
  }else{
    document.getElementById('btn_Login')!.innerText="Login";
    ocultar_Botones();
    event.preventDefault();
  }
};

