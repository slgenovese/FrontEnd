export interface Grafico {
    id: number,
    titulo: string, 
    etiqueta: string[],
    porcentaje: number[],
    color_Fondo: string[],
    color_Borde: string[],
  }

  export const grafico = [{
    id: 1,
    titulo: "Lenguajes de Programación", 
    etiqueta: ["C/C++", "VB/.Net","Assembler","HTML/CSS/JavaScript","","","","","",""],
    porcentaje: [35, 35, 10, 15,0,0,0,0,0,0],
    color_Fondo: ['red', 'green', 'blue', 'orange', 'white', 'white', 'white', 'white', 'white', 'white'],
    color_Borde: ['red', 'green', 'blue', 'orange', 'white', 'white', 'white', 'white', 'white', 'white'],
  },{
    id: 2,
    titulo: "Inglés Técnico", 
    etiqueta: ["Escritura", "Hablado","Lectura                        "],
    porcentaje: [10, 10, 80],
    color_Fondo: ['red', 'green', 'blue'],
    color_Borde: ['red', 'green', 'blue'],
  },{
    id: 3,
  titulo: "Frances", 
  etiqueta: ["Escritura", "Hablado","Lectura                        "],
  porcentaje: [10, 10, 80],
  color_Fondo: ['red', 'green', 'blue'],
  color_Borde: ['red', 'green', 'blue'],
},{
  id: 4,
titulo: "Frances", 
etiqueta: ["Escritura", "Hablado","Lectura                        "],
porcentaje: [10, 10, 80],
color_Fondo: ['red', 'green', 'blue'],
color_Borde: ['red', 'green', 'blue'],
},{
  id: 5,
titulo: "Frances", 
etiqueta: ["Escritura", "Hablado","Lectura                        "],
porcentaje: [10, 10, 80],
color_Fondo: ['red', 'green', 'blue'],
color_Borde: ['red', 'green', 'blue'],
},{
  id: 6,
titulo: "Frances", 
etiqueta: ["Escritura", "Hablado","Lectura                        "],
porcentaje: [10, 10, 80],
color_Fondo: ['red', 'green', 'blue'],
color_Borde: ['red', 'green', 'blue'],
}]