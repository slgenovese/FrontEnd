export interface Educacion {
    id: number,
    imagen: string, 
    titulo:string,
    institucion: string,
    periodo: string,
    desde: string,
    hasta: string,
  }

  export const educacion = [{
    id: 1,
    imagen: "assets/Unqui.png", 
    titulo:"Técnico Universitario en Automatización y Control.",
    institucion: "Universidad Nacional de Quilmes.",
    desde: "1991",
    hasta: "1997",
  },{
    id: 2,
//    imagen: "assets/Cisco.png", 
    imagen: "https://i.postimg.cc/FKs4Pjb6/Cisco.png", 
    titulo:"Cisco Certified Network Associate (CCNA).",
    institucion: "Instituto Perpetuo Socorro.", 
    desde: "2001",
    hasta: "2002",
  },{
    id: 3,
    imagen: "assets/Microsoft.png", 
    titulo:"Microsoft Certified Professional (MCP).",
    institucion: "BS Trainig.", 
    desde: "2004",
    hasta: "2005",
  },{
    id: 4,
    imagen: "assets/Argentina_Programa.png", 
    titulo:"Full Stack Developer Jr.",
    institucion: "Instituto Nacional de Tecnología Industrial.", 
    desde: "2022",
    hasta: "2023",
}];