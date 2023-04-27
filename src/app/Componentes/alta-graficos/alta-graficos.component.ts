import { Component, ViewChild, OnInit, TemplateRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { GraficoService } from 'src/app/servicios/grafico.service';
import { Chart } from 'chart.js/auto';
import { PorcentajeComponent } from '../porcentaje/porcentaje.component';
import { Grafico, Grafico_sin_ID, HabilidadesDato, HabilidadesDato_sin_ID } from 'src/app/modelos/grafico';

@Component({
  selector: 'app-alta-graficos',
  templateUrl: './alta-graficos.component.html',
  styleUrls: ['./alta-graficos.component.css']
})
export class AltaGraficosComponent {

  canvas: any;
  ctx: any;
  myChart: any;
  testigo: boolean=true;

  titulo!: string;
  tabla!: string;
  id!: number;
  quien_llama!: string;
  titulo_aux!: string;
  etiqueta: string[]=[];
  porcentaje: number[]=[];
  color_Fondo: string[]=[];
  color_Borde: string[]=[];
  datosIngresos!: any;
  color!: string;
  i!: number;

  grafico: Grafico_sin_ID = new Grafico_sin_ID;
  habilidadesDato: HabilidadesDato_sin_ID[] = [];
  habilidades: HabilidadesDato = new HabilidadesDato; 

  @ViewChild('mdl_alta', { read: TemplateRef }) mdl_alta!:TemplateRef<any>;

  pre_open_grafico(){
    this.quien_llama='grafico'
    this.titulo = 'Área de Alta - Hard & Soft Skills';
    this.open(this.mdl_alta );
    this.porcentaje.splice(0);
    this.porcentaje.push(100);
    this.color_Fondo.splice(0);
    this.color_Fondo.push("black");
    this.etiqueta.splice(0);
    this.etiqueta.push("Sin Definir");
    this.graficar('nuevo_grafico');
  }

  recibe_titulo_aux(event: KeyboardEvent){
    if(event.key=='Enter'){    
      const texto = document.getElementById('titulo') as HTMLTextAreaElement;
      this.titulo_aux= texto.value;
      this.graficar('nuevo_grafico');
    }
  }
  
  graficar(modo: string){
    if(modo==='agregar'){
      this.etiqueta[this.i+1]=" ";
      this.color_Borde[this.i+1]="N/A";
      this.color_Fondo[this.i+1]="N/A";
      this.porcentaje[this.i+1]=0;
    }
    var datosIngresos = {
      data: this.porcentaje, 
      backgroundColor: this.color_Fondo,
      borderColor: this.color_Fondo,
      borderWidth: 0,// Ancho del borde
    };
    if(modo==='primera_vez' || modo==='nuevo_grafico'){
      console.log("Llego 1");
      this.grafico_Donut(datosIngresos, this.etiqueta, this.titulo_aux, "donut-chart", "grafico")
    }
    this.testigo=false;
  }

  recibe_color(color: string, i: number ){
    if (color!='N/A'){
      this.i=i;
      this.color_Borde[i]=color;
      this.color_Fondo[i]=color;
      this.graficar('nuevo_grafico');
    }
  }


recibe_etiqueta(event: KeyboardEvent, i: number){
  if(event.key=='Enter'){  
    this.i=i;  
    const texto = document.getElementById('textArea'+this.i) as HTMLTextAreaElement;
    console.log("Indice: "+this.i);
    console.log("Etiqueta: "+texto.value);
    this.etiqueta[this.i]= texto.value;
    this.graficar('nuevo_grafico');
  }
}

borrar(i: number){
  this.color_Fondo.splice(i,1,);
  this.color_Borde.splice(i,1,);
  this.etiqueta.splice(i,1,);
  this.porcentaje.splice(i,1,);
  this.graficar('nuevo_grafico');
}

  guardar_indice(i: number){
    this.i=i;
  }

  recibe_porcentaje(porcentaje: string, i: number){
    this.i=i;
    let suma=0;

    let indice=this.etiqueta.indexOf('Sin Definir')
    if(indice!=-1){
      suma = ((this.porcentaje.reduce(function (a, b) {return a + b;}, 0))- this.porcentaje[indice]) - this.porcentaje[i];
    //  this.porcentaje[indice]=this.porcentaje[indice]-Number(porcentaje);
    }else{
      suma = (this.porcentaje.reduce(function (a, b) {return a + b;}, 0)) - this.porcentaje[i];
    }

    if (suma<100){
      if (Number(porcentaje)+suma<=100){
        this.porcentaje[i]=Number(porcentaje);
      }else{
        this.porcentaje[i]=100-suma;
      }
    }
    // Borro el sector 'sin definir' para que lo calcule y lo ponga al final de la lista
    this.borrar(indice)
    this.graficar('nuevo_grafico');
    console.log("porcentaje: "+this.porcentaje[i])
}

grabar_registro(){
  console.log("Se actualizo el registro N°:" + this.id + " de la tabla:" + this.tabla);
  var auxiliar = document.getElementById("titulo") as HTMLTextAreaElement;
  this.grafico.titulo=auxiliar.value;
  for(let x=0; x<this.etiqueta.length;++x){
    this.habilidades= new HabilidadesDato;
    this.grafico.habilidadesDatos[x].etiqueta=this.etiqueta[x];
    this.grafico.habilidadesDatos[x].color=this.color_Borde[x];
    this.grafico.habilidadesDatos[x].porcentaje=this.porcentaje[x];
  }
  this.graficoService.postGrafico(this.grafico);
}


closeResult: string = '';

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, private graficoService: GraficoService) {}

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
    this.testigo=true;
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

  // Se calcula el porcentaje faltante para el 100%
  let suma = (datosIngresos.data.reduce(function (a: any, b: any) {return a + b;}, 0));
  if (suma<100){
    let indice=etiquetas.indexOf('Sin Definir')
    if(indice!=-1){
      datosIngresos.data[indice]= datosIngresos.data[indice]+(100-suma);
    }else{
      datosIngresos.data.push(100-suma);
      datosIngresos.backgroundColor.push('black'); 
      datosIngresos.borderColor.push('black'); 
      etiquetas.push('Sin Definir'); 
    }
  }

  //**********/


    // Obtener una referencia al elemento canvas del DOM
    this.canvas = document.getElementById(objeto)!;
    this.ctx = this.canvas.getContext('2d')!;

    //Se muestra el selector 'canvas' donde se va a graficar
    document.getElementById(grafico_id)!.style.display="block";
    if (this.myChart){
      this.myChart.destroy();
    }
      this.myChart = new Chart (this.ctx,{
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

