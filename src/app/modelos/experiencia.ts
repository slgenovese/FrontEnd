export class Experiencia {
  id!: number;
  texto!: string;
  desde!: string;
  hasta!: string;
  provincia!: string;
  pais!: string;
  n_orden!: number;
  institucion: Institucion = new Institucion();
}

export class Institucion {
  id!: number;
  institucion!: string;
  link_icono!: string;
  titulos!: Titulo[];

  Institucion(id: number, institucion: string, link_icono: string, titulos: Titulo[]){
    this.id=id;
    this.institucion = institucion;
    this.link_icono = link_icono;
    //this.titulos  Titulo[] = new Titulo;

  };
}

export class Titulo {
  id!: number;
  titulo!: string;
}