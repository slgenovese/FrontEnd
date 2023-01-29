export interface Grafico {
    id: string,
    titulo: string, 
    etiqueta: string[],
    porcentaje: number[],
    color_Fondo: string[],
    color_Borde: string[],
  }

  export const grafico = [{
    id: "1",
    titulo: "Lenguajes de Programación", 
    etiqueta: ["C/C++", "VB/.Net","Assembler","HTML/CSS/JavaScript"],
    porcentaje: [35, 35, 10, 15],
    color_Fondo: ['red', 'green', 'blue', 'orange'],
    color_Borde: ['red', 'green', 'blue', 'orange'],
  },{
    id: "2",
    titulo: "Ingles Técnico", 
    etiqueta: ["Escritura", "Hablado","Lectura                        "],
    porcentaje: [10, 10, 80],
    color_Fondo: ['red', 'green', 'blue'],
    color_Borde: ['red', 'green', 'blue'],
  }]