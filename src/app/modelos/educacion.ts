export class Educacion {
  id!: number;
  desde!: string;
  hasta!: string;
  n_orden!: number;
  instituciones!: Institucion[];
  titulo!: Titulo2;
}

export class Institucion {
  id!: number;
  institucion!: string;
  link_icono!: string;
  titulos!: Titulo[];
}

export class Titulo {
  id!: number;
  titulo!: string;
}

export class Titulo2 {
  id!: number;
  titulo!: string;
}
