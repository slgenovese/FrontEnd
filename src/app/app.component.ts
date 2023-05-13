import { Component } from '@angular/core';
import { ConfigurarComponent } from './Componentes/configurar/configurar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FrontEnd';

  constructor() {
    // Se define la variable link_Base de forma global para poder modificar la locacion del servidor
    // en un solo lugar.
    localStorage.setItem('link_Base', 'https://portfolio-backend-uahj.onrender.com/');
    localStorage.setItem('persona_id', '');
  }
}





