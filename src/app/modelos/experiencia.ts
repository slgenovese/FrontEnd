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
  institucion!: Institucion[];
}

export class Institucion {
  id!: number;
  institucion!: string;
  link_icono!: string;
  titulo!: Titulo[];
}

export class Titulo {
  id!: number;
  titulo!: string;
}