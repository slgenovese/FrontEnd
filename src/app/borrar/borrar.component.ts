import { Component } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {

  borrar_registro(tabla: string, id: number){
    console.log(tabla+"-"+id);
  }
}
