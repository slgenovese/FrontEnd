import { Component,ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements AfterViewInit {

  @ViewChild('color') color_aux!:ElementRef;
  @Input() color!: string;
  @Output() valueChange= new EventEmitter<string>();

  
  elegido(color: string){
    this.valueChange.emit(color);
  }

  ngAfterViewInit(): void {
    this.color_aux.nativeElement.backgroundColor=this.color;
    this.color_aux.nativeElement.value= this.color;

  }

}
