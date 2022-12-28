export interface Educacion {
    id: number,
    imagen: string, 
    titulo:string,
    institucion: string,
    periodo: string,
  }

  export const educacion = [{
    id: 1,
    imagen: "assets/Unqui.png", 
    titulo:"Técnico Universitario en Automatización y Control.",
    institucion: "Universidad Nacional de Quilmes.",
    periodo:" 1991 - 1997",
  },{
    id: 2,
    imagen: "assets/Cisco.png", 
    titulo:"Cisco Certified Network Associate (CCNA).",
    institucion: "Instituto Perpetuo Socorro.", 
    periodo:" 2001 - 2002 ",
  },{
    id: 3,
    imagen: "assets/Microsoft.png", 
    titulo:"Microsoft Certified Professional (MCP).",
    institucion: "BS Trainig.", 
    periodo:" 2004 - 2005",
  },{
    id: 4,
    imagen: "assets/Argentina_Programa.png", 
    titulo:"Full Stack Developer Jr.",
    institucion: "Instituto Nacional de Tecnología Industrial.", 
    periodo:" 2022 - 2023 ",
}];