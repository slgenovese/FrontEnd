import { Component, Input } from '@angular/core';
import { banner } from '../banner';
import { EditarComponent } from '../editar/editar.component';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent {
  banner=banner;

  @Input()  editar!: EditarComponent;

}
