import { Component, ViewChild, OnInit, TemplateRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Chart } from 'chart.js/auto';
import { redes }  from '../redes';


@Component({
  selector: 'app-editar-graficos',
  templateUrl: './editar-graficos.component.html',
  styleUrls: ['./editar-graficos.component.css']
})
export class EditarGraficosComponent {

  redes=redes;
  canvas: any;
  ctx: any;

  titulo!: string;
  tabla!: string;
  id!: number;
  quien_llama!: string;
  titulo_aux!: string;
  etiqueta!: string[];
  porcentaje!: number[];
  color_Fondo!: string[];
  color_Borde!: string[];
  datosIngresos!: any;
  color!: string;
  i!: number;

  @ViewChild('mdl_editar', { read: TemplateRef }) mdl_editar!:TemplateRef<any>;

  editar_registro(){
    console.log("Se actualizo el registro N°:" + this.id + " de la tabla:" + this.tabla);
  }

  recibe_color(color: string){
    console.log(color);
  }

  guardar_indice(i: number){
    this.i=i;
  }

  invisibilizar(i: number){
/*    console.log("Paso Hola!!!");
//    console.log("Paso: "+i as string)
    document.getElementById("boton1")!.style.display="none";
*/
  }
  agregar(){
    console.log("Hola: "+this.i);
    this.etiqueta[this.i+1]=" ";
    this.color_Borde[this.i+1]="N/A";
    this.color_Fondo[this.i+1]="N/A";
    this.porcentaje[this.i+1]=1;
    var datosIngresos = {
      data: this.porcentaje, 
      backgroundColor: this.color_Fondo,
      borderColor: this.color_Fondo,
      borderWidth: 0,// Ancho del borde
    };

    this.grafico_Donut(datosIngresos, this.etiqueta, this.titulo_aux, "donut-chart", "grafico")

  }

  recibe_porcentaje(porcentaje: string){
    console.log(porcentaje);
  }

  pre_open_grafico(tabla: string, id: number, titulo: string , etiqueta: string[], porcentaje: number[], color_Fondo: string[], color_Borde: string[]){
    this.tabla=tabla;
    this.id=id; 
    this.titulo_aux=titulo;
    this.etiqueta=etiqueta;
    this.porcentaje=porcentaje;
    this.color_Fondo=color_Fondo;
    this.color_Borde=color_Borde;
    this.quien_llama='grafico'
    this.titulo = 'Área de Edición - Hard & Soft Skills';

    var datosIngresos = {
      data: porcentaje, 
      backgroundColor: color_Fondo,
      borderColor: color_Fondo,
      borderWidth: 0,// Ancho del borde
    };
    this.datosIngresos=datosIngresos;

    this.open(this.mdl_editar );
    

    }


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
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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


  grafico_Donut(datosIngresos: any, etiquetas: any, titulo: string, objeto: string, grafico_id: string){
    // Obtener una referencia al elemento canvas del DOM
    this.canvas = document.getElementById(objeto)!;
    this.ctx = this.canvas.getContext('2d')!;

    //Se muestra el selector 'canvas' donde se va a graficar
    document.getElementById(grafico_id)!.style.display="block";
  

    const myChart = new Chart (this.ctx,{
      type: 'doughnut',// Tipo de gráfica. Puede ser doughnut o pie
      data: {
        datasets: [
              datosIngresos,
              // Aquí más datos...
            ],
            labels: etiquetas,
          },

      options: {
        plugins:{
          title: {
              display: true,
              text: titulo,
              align: 'center',
              font: {
                size: 18,
              }, 
           },
          legend: {
            position: "right",
            labels:{
              font: {
                size: 12,
              }
            }
          },
        },
    
        },
    
      });
    };




}
