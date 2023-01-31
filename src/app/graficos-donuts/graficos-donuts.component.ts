import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { grafico } from '../grafico'; 
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-graficos-donuts',
  templateUrl: './graficos-donuts.component.html',
  styleUrls: ['./graficos-donuts.component.css']
})



export class GraficosDonutsComponent implements OnInit{

  title = 'FrontEnd';
  canvas: any;
  ctx: any;
    
  grafico=grafico;

  @Input()  borrar!: BorrarComponent;
  @Input()  editar!: EditarComponent;

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

constructor() {}

  ngOnInit(): void {

    for(let grafico of this.grafico){

      this.datos[grafico.id].id=grafico.id;
      this.datos[grafico.id].titulo =grafico.titulo;
      this.datos[grafico.id].etiqueta =grafico.etiqueta;
      this.datos[grafico.id].porcentaje =grafico.porcentaje;
      this.datos[grafico.id].color_Fondo =grafico.color_Fondo;
      this.datos[grafico.id].color_Borde =grafico.color_Borde;

      var datosIngresos = {
        data: grafico.porcentaje, 
        backgroundColor: grafico.color_Fondo,
        borderColor: grafico.color_Fondo,
        borderWidth: 0,// Ancho del borde
      };
  
      this.grafico_Donut(datosIngresos, grafico.etiqueta, grafico.titulo, "donut-chart"+grafico.id, "grafico"+grafico.id);
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
    public etiqueta!: string[];
    public porcentaje!: number[];
    public color_Fondo!: string[];
    public color_Borde!: string[];
    constructor() {};
  }

