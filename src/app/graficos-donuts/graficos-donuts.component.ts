import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { grafico } from '../grafico'; 

@Component({
  selector: 'app-graficos-donuts',
  templateUrl: './graficos-donuts.component.html',
  styleUrls: ['./graficos-donuts.component.css']
})
export class GraficosDonutsComponent implements OnInit{
//export class GraficosDonutsComponent {
    title = 'FrontEnd';
  canvas: any;
  ctx: any;
  
  grafico=grafico;

  constructor() {}

  ngOnInit(): void {

    for(let grafico of this.grafico){

      console.log(grafico.titulo);

      var datosIngresos = {
        data: grafico.porcentaje, 
        backgroundColor: grafico.color_Fondo,
        borderColor: grafico.color_Fondo,
        borderWidth: 0,// Ancho del borde
      };
  
      this.grafico_Donut(datosIngresos, grafico.etiqueta, grafico.titulo, "donut-chart"+grafico.id, "grafico"+grafico.id);
    }

/*
   // Las etiquetas son las porciones de la gráfica
  var etiquetas = ["C/C++", "VB/.Net","Assembler","HTML/CSS/JavaScript"]
  // Podemos tener varios conjuntos de datos. Comencemos con uno
  var titulo ="Lenguajes de Programación"
  var datosIngresos = {
    data: [35, 35, 10, 15], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
      'red',
      'green',
      'blue',
      'orange',
  ],// Color de fondo
    borderColor: [
      'red',
      'green',
      'blue',
      'orange',
  ],// Color del borde
    borderWidth: 0,// Ancho del borde
  };
  this.grafico_Donut(datosIngresos, etiquetas, titulo, "donut-chart4");


  // Las etiquetas son las porciones de la gráfica
  var etiquetas = ["Escritura", "Hablado","Lectura                        "]
  // Podemos tener varios conjuntos de datos. Comencemos con uno
  var titulo ="Inglés Técnico"
  var datosIngresos = {
    data: [10, 10, 80], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
      'red',
      'green',
      'blue',
  ],// Color de fondo
    borderColor: [
      'red',
      'green',
      'blue',
  ],// Color del borde
    borderWidth: 0,// Ancho del borde
  };
    this.grafico_Donut(datosIngresos, etiquetas, titulo, "donut-chart5");
  //    this.grafico_Donut(datosIngresos: any, etiquetas: any, titulo: string, objeto: string);
*/  
}
  
  
  
  grafico_Donut(datosIngresos: any, etiquetas: any, titulo: string, objeto: string, grafico_id: string){
    // Obtener una referencia al elemento canvas del DOM
    this.canvas = document.getElementById(objeto)!;
    this.ctx = this.canvas.getContext('2d')!;

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
