import { Component, Input, OnInit } from '@angular/core';
import { Banner } from '../modelo/banner';
import { BannerService } from '../servicios/banner.service';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit{
  banner: Banner[] =[];

  constructor(private bannerService: BannerService) {}

  @Input()  editar!: EditarComponent;

  ngOnInit(): void {
    this.bannerService.getBanner().subscribe(data=>{this.banner=data});
  }

}
