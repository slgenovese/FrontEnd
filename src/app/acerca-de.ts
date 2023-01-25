export interface Acerca_de {
    id: number,
    imagen: string,
    nombre_apellido: string, 
    cargo_actual:string,
    id_provincia: string,
    provincia: string,
    id_pais: string,
    pais: string,
    texto: string,
  }

export const acerca_de=[{
  id: 1,
  imagen: "assets/MSAL.png", 
  nombre_apellido: "Sergio Lorenzo Genovese", 
  cargo_actual:"Responsable de Area de Sistemas de Información en el Ministerio de Salud de la Nación",
  id_provincia:"Y",
  provincia:"Buenos Aires, ",
  id_pais:"AR",
  pais:"Argentina.",
  texto:"Técnico Universitario en Automatización y Control, Informático, Docente, MCP, CCNA, Full Stack Developer Jr.",
}]