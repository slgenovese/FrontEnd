import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Grafico } from '../../modelos/grafico';
import { GraficoService } from '../../servicios/grafico.service';
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarGraficosComponent } from '../editar-graficos/editar-graficos.component';
import { AltaGraficosComponent } from '../alta-graficos/alta-graficos.component';

@Component({
  selector: 'app-graficos-donuts',
  templateUrl: './graficos-donuts.component.html',
  styleUrls: ['./graficos-donuts.component.css']
})

export class GraficosDonutsComponent implements OnInit{

  title = 'FrontEnd';
  canvas: any;
  ctx: any;
    
  id!: number;
  titulo!: string;
  etiqueta: string[]=[];
  porcentaje: number[]=[];
  color_Fondo: string[]=[];
  color_Borde: string[]=[];

  grafico: Grafico[]=[];
  habilidades: Habilidades[]=[];

  @Input()  borrar!: BorrarComponent;
  @Input()  editar!: EditarGraficosComponent;
  @Input()  alta!: AltaGraficosComponent;

  datos:  Graficos[] =[
    new Graficos(),
    new Graficos(),
    new Graficos(),
    new Graficos(),
    new Graficos(),
    new Graficos(),
    new Graficos(),
    new Graficos(),
    new Graficos(),
  ] 

  //https://www.sneppets.com/angular/how-to-declare-model-class-and-use-in-angular-component-typescript/

  constructor(private graficoService: GraficoService) {}

ngOnInit(): void {

  // Leo, mediante un servicio, del archivo JSON los datos para hacer el grafico
  this.graficoService.getGrafico().subscribe(data=>{
    this.habilidades=data
  // La llamada a la funcion se hace dentro del "subscribe" para esperar los datos que se leen de forma
  // asincronica
  this.procesar(this.habilidades);
});
}
  procesar(habilidades: Habilidades[]){
    for(let habilidad of habilidades){
      this.datos[habilidad.id].id=habilidad.id; // Falta analizar si corresponde este dato
      this.datos[habilidad.id].titulo =habilidad.titulo;

        let i=0;
        for(let vectorDatos of habilidad.habilidadesDatos){
          this.datos[habilidad.id].etiqueta[i] =vectorDatos.etiqueta;
          this.datos[habilidad.id].porcentaje[i] =vectorDatos.porcentaje;
          this.datos[habilidad.id].color_Fondo[i] =vectorDatos.color;
          this.datos[habilidad.id].color_Borde[i] =vectorDatos.color;
          i++;
        }
      var datosIngresos = {
        data: this.datos[habilidad.id].porcentaje, 
        backgroundColor: this.datos[habilidad.id].color_Fondo,
        borderColor: this.datos[habilidad.id].color_Borde,
        borderWidth: 0,// Ancho del borde
      };
      this.grafico_Donut(datosIngresos, this.datos[habilidad.id].etiqueta, habilidad.titulo, "donut-chart"+habilidad.id, "grafico"+habilidad.id);
  
    }
}

pre_grafico( id: number, etiqueta: String[], titulo: string, porcentaje: number[], color_Fondo: string[]){

  let suma = (this.porcentaje.reduce(function (a, b) {return a + b;}, 0));

  var datosIngresos = {
    data: porcentaje, 
    backgroundColor: color_Fondo,
    borderColor: color_Fondo,
    borderWidth: 0,// Ancho del borde
  };
this.grafico_Donut(datosIngresos, etiqueta, titulo, "donut-chart"+id, "grafico"+id);

}

grafico_Donut(datosIngresos: any, etiquetas: any, titulo: string, objeto: string, grafico_id: string){

  // Se calcula el porcentaje faltante para el 100%
  let suma = (datosIngresos.data.reduce(function (a: any, b: any) {return a + b;}, 0));

  if (suma<100){
    datosIngresos.data.push(100-suma);
    datosIngresos.backgroundColor.push('black'); 
    datosIngresos.borderColor.push('black'); 
    etiquetas.push('Sin Definir'); 
  }
  //**********/

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
          position: "left",
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

  export class Graficos{
    public id!: number;
    public titulo!: string;
    public etiqueta: string[]=[];
    public porcentaje: number[]=[];
    public color_Fondo: string[]=[];
    public color_Borde: string[]=[];
    constructor() {};
  }
  export class Habilidades{
    id!: number;
    titulo!: string;
    n_orden!: number;
    habilidadesDatos!: HabilidadesDato[];
  }
  export class HabilidadesDato {
    id!: number;
    color!: string;
    etiqueta!: string;
    porcentaje!: number;
  }