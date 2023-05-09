import { Component, ViewChild, OnInit, TemplateRef, ChangeDetectorRef, AfterContentChecked, AfterViewInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Chart } from 'chart.js/auto';
import { PorcentajeComponent } from '../porcentaje/porcentaje.component';
import { Grafico, HabilidadesDato } from 'src/app/modelos/grafico';
import { GraficoService } from 'src/app/servicios/grafico.service';
import  Swal from "sweetalert2"; 

@Component({
  selector: 'app-editar-graficos',
  templateUrl: './editar-graficos.component.html',
  styleUrls: ['./editar-graficos.component.css']
})

export class EditarGraficosComponent implements AfterViewInit, AfterContentChecked{

  canvas: any;
  ctx: any;
  myChart: any;
  testigo: boolean=true;

  respuesta: boolean=false;
  titulo!: string;
  tabla!: string;
  id!: number;
  quien_llama!: string;
  titulo_aux!: string;
  id_datos!: number[];
  etiqueta!: string[];
  porcentaje!: number[];
  color_Fondo!: string[];
  color_Borde!: string[];
  datosIngresos!: any;
  color!: string;
  i!: number;

  grafico: Grafico = new Grafico;
  habilidadesDato: HabilidadesDato[] = [];
  habilidades: HabilidadesDato = new HabilidadesDato; 

  @ViewChild('mdl_editar', { read: TemplateRef }) mdl_editar!:TemplateRef<any>;


public ngAfterViewInit(): void {
}  

ngAfterContentChecked(): void {
  this.changeDetector.detectChanges();
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
}



editar_registro(){
  this.grafico.id=this.id;
  var auxiliar = document.getElementById("titulo") as HTMLTextAreaElement;
  this.grafico.titulo=auxiliar.value;
  this.grafico.habilidadesDatos =[];
  for(let x=0; x<this.etiqueta.length;++x){
    this.habilidades= new HabilidadesDato;
    this.habilidades.id=this.id_datos[x];
    this.habilidades.etiqueta=this.etiqueta[x];
    this.habilidades.color=this.color_Borde[x];
    this.habilidades.porcentaje=this.porcentaje[x];
    if (this.etiqueta[x]!="Sin Definir"){
      this.grafico.habilidadesDatos.push(this.habilidades);
    }
  }
  if(this.verificar_registro(this.grafico)){
    this.graficoService.postGrafico(this.grafico);
  }
  if (this.respuesta) {window.location.reload()};
}

verificar_registro(registro: any): boolean{
  this.respuesta=false;
  if (registro.titulo==""){this.mensaje('El campo TITULO no puede estar vacio!'); 
  this.respuesta=false;
//  this.graficoService.deleteGrafico(this.id);
  return this.respuesta;
} 
  if (registro.habilidadesDatos.length==0){this.mensaje('No hay ninguna HABILIDAD dada de alta!'); 
  this.respuesta=false;
//  this.graficoService.deleteGrafico(this.id);
  return this.respuesta;
  } 
  this.respuesta=true;
  return this.respuesta;
}

mensaje(texto: string){
  Swal.fire({
    icon: 'warning',
    title: 'Algo salio mal!!!',
    text: texto,
    confirmButtonColor: "black",
    iconColor: "yellow",
    background: "rgb(220, 231, 235)",
  })
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
    this.etiqueta[this.i]= texto.value;
    this.graficar('nuevo_grafico');
  }
}

recibe_titulo_aux(event: KeyboardEvent){
  if(event.key=='Enter'){    
    const texto = document.getElementById('titulo') as HTMLTextAreaElement;
    this.titulo_aux= texto.value;
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

  guardar_id(datos_id: number){

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
      this.grafico_Donut(datosIngresos, this.etiqueta, this.titulo_aux, "donut-chart", "grafico")
    }
    this.testigo=false;
  }


  pre_open_grafico(tabla: string, id: number, titulo: string , id_datos: number[], etiqueta: string[], porcentaje: number[], color_Fondo: string[], color_Borde: string[]){
    this.tabla=tabla;
    this.id=id; 
    this.titulo_aux=titulo;
    this.etiqueta=etiqueta;
    this.porcentaje=porcentaje;
    this.color_Fondo=color_Fondo;
    this.color_Borde=color_Borde;
    this.id_datos=id_datos;
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
  constructor(private modalService: NgbModal, private graficoService: GraficoService, private changeDetector: ChangeDetectorRef) {}

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
