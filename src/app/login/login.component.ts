import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  email='';
  password='';

  constructor(public authService: AuthService){}
  Login(){
    this.authService.login(this.email, this.password)
  }

  ngOnInit(): void {}
}

