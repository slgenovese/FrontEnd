export interface Experiencia{
    id: number,
    imagen: string, 
    texto:string,
    institucion: string,
    desde: string,
    hasta: string,
    id_provincia: string,
    provincia: string,
    id_pais: string,
    pais: string,
  }
  
  export const experiencia=[{
    id: 1,
    imagen: "assets/MSAL.png", 
    texto:"Desarrollador Visual Basic - Jefe de Desarrollo - Jefe de Tecnología - Responsable del Area de Sistemas de información de la Dirección Nacional de Medicamentos y Tecnología Sanitaria.",
    institucion: "Ministerio de Salud de la Nación.",
    desde: "2002",
    hasta: "2023",
    id_provincia:"B",
    provincia:"Buenos Aires, ",
    id_pais:"AR",
    pais:"Argentina."
  },{
    id: 2,
    imagen: "assets/Unqui.png", 
    texto:"Docente en la cátedra de Algoritmos y Programación I - Lenguaje C++.",
    institucion: "Universidad Nacional de Quilmes.", 
    desde: "1997",
    hasta: "2012",
    id_provincia:"B",
    provincia:"Buenos Aires, ",
    id_pais:"AR",
    pais:"Argentina."
  },{
    id: 3,
    imagen: "assets/CNRT.png", 
    texto:"Consultor en el Area de Informática.",
    institucion: "Comisión Nacional de Regulación del Transporte.", 
    desde: "1997",
    hasta: "1997",
    id_provincia:"B",
    provincia:"Buenos Aires, ",
    id_pais:"AR",
    pais:"Argentina."
  },{
    id: 4,
    imagen: "assets/Datafox.png", 
    texto:"Desarrollador - Analista Funcional - Lider de Proyecto - Gerente de Sistemas.",
    institucion: "Datafox Informática S.A.", 
    desde: "1993",
    hasta: "2002",
    id_provincia:"B",
    provincia:"Buenos Aires, ",
    id_pais:"AR",
    pais:"Argentina."
  }];