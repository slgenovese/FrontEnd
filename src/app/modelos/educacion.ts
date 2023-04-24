export class Educacion {
  id!: number;
  desde!: string;
  hasta!: string;
  n_orden!: number;
  institucion!: Institucion;
  titulo!: Titulo;
}

export class Institucion {
  id!: number;
  institucion!: string;
  link_icono!: string;
}

export class Titulo {
  id!: number;
  titulo!: string;
}

