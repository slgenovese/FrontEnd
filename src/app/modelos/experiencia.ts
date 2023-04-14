export class Experiencia {
  id!: number;
  texto!: string;
  desde!: string;
  hasta!: string;
  id_provincia!: string;
  id_pais!: string;
  provincia!: string;
  pais!: string;
  n_orden!: number;
  instituciones!: Institucion[];
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