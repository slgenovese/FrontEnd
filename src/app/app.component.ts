import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
}


export class DashboardComponent {
  canvas: any;
  ctx: any;

  constructor() {}
}

window.onload = function inicializar(){
  datos();
  document.getElementById('btn_Login')!.innerText="Login";
  ocultar_Botones();
  iniciar_Lista();
  
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
  grafico_Donut(datosIngresos, etiquetas, titulo, "donut-chart1");
  
  // Las etiquetas son las porciones de la gráfica
  var etiquetas = ["Escritura", "Hablado","Lectura"]
  // Podemos tener varios conjuntos de datos. Comencemos con uno
  var titulo ="Ingles Técnico"
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
  grafico_Donut(datosIngresos, etiquetas, titulo, "donut-chart2");
  
  };

function ocultar_Botones(){
  for(var i=0;i<12;i++){
    document.getElementById('btnEdicion_'+i)!.style.display='none';
  }
  for(i=0;i<9;i++){
    document.getElementById('btnBorrado_'+i)!.style.display='none';
  }
};

function datos(){
  var acerca_De ="Técnico Universitario en Automatización y Control, Informático, Docente, MCP, CCNA, Full Stack Developer Jr.";
  var $acerca_De =document.getElementById('acerca_De')!;
  $acerca_De.innerText=acerca_De;
};

function iniciar_Lista(){
  let experiencia=[{
    imagen: "assets/MSAL.png", 
    texto:"Desarrollador Visual Basic - Jefe de Desarrollo - Jefe de Tecnología - Responsable del Area de Sistemas de información de la Dirección Nacional de Medicamentos y Tecnología Sanitaria. <br>",
    institucion: "<b>Ministerio de Salud de la Nación.</b><br>",
    periodo:" Del 2002 a la actualidad. <br>",
    provincia:"Buenos Aires, ",
    pais:"Argentina"
  },{
    imagen: "assets/Unqui.png", 
    texto:"Docente en la cátedra de Algoritmos y Programación I - Lenguaje C++.<br>",
    institucion: "<b> Universidad Nacional de Quilmes. </b><br>", 
    periodo:" De 1997 al 2012. <br>",
    provincia:"Buenos Aires, ",
    pais:"Argentina"
  },{
    imagen: "assets/CNRT.png", 
    texto:"Consultor en el Area de Informática.<br>",
    institucion: "<b> Comisión Nacional de Regulación del Transporte. </b><br>", 
    periodo:" De 1997 a 1997. <br>",
    provincia:"Buenos Aires, ",
    pais:"Argentina"
  },{
    imagen: "assets/Datafox.png", 
    texto:"Desarrollador - Analista Funcional - Lider de Proyecto - Gerente de Sistemas. <br>",
    institucion: "<b> Datafox Informática S.A. </b><br>", 
    periodo:" De 1993 a 2002. <br>",
    provincia:"Buenos Aires, ",
    pais:"Argentina"
  }];

  let educacion=[{
    imagen: "assets/Unqui.png", 
    titulo:"Técnico Universitario en Automatización y Control.<br></article>",
    institucion: "<b>Universidad Nacional de Quilmes.</b><br> ",
    periodo:" 1991 - 1997",
  },{
    imagen: "assets/Cisco.png", 
    titulo:"Cisco Certified Network Associate (CCNA).<br>",
    institucion: "<b>Instituto Perpetuo Socorro. </b><br>", 
    periodo:" 2001 - 2002 ",
  },{
    imagen: "assets/Microsoft.png", 
    titulo:"Microsoft Certified Professional (MCP).<br>",
    institucion: "<b>BS Trainig.</b> <br>", 
    periodo:" 2004 - 2005",
  },{
    imagen: "assets/Argentina_Programa.png", 
    titulo:"Full Stack Developer Jr.<br>",
    institucion: "<b>Instituto Nacional de Tecnología Industrial.</b><br>", 
    periodo:" 2022 - 2023 ",
}];

  
for (var i=0;i<4; i++){
  document.getElementById('exp_imagen_'+i)!.setAttribute("src",experiencia[i].imagen );
  document.getElementById('exp_texto_'+i)!.innerHTML=experiencia[i].texto + experiencia[i].institucion + experiencia[i].periodo + experiencia[i].provincia + experiencia[i].pais;
}
for (i=0;i<4; i++){
  document.getElementById('edu_imagen_'+i)!.setAttribute("src",educacion[i].imagen );
  document.getElementById('edu_texto_'+i)!.innerHTML=educacion[i].institucion + educacion[i].titulo + educacion[i].periodo;
}
};
function boton_Login(event: any){
  if(document.getElementById('btn_Login')!.textContent == 'Login'){
    document.getElementById("login")!.style.display="block";
  }else{
    document.getElementById('btn_Login')!.innerText="Login";
    ocultar_Botones();
    event.preventDefault();
  }
};

function grafico_Donut(datosIngresos: any, etiquetas: any, titulo: string, objeto: string){
  // Obtener una referencia al elemento canvas del DOM
  this.canvas = document.getElementById(objeto)!;
  this.ctx = this.canvas.getContext('2d')!;

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
        title: {
            display: true,
            text: titulo,
        },
        legend: {
          position: "left",
        },
  
    },
  
    });
  };