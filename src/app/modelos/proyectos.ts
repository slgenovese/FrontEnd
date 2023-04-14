export class Proyectos {
  id!: number;
  texto!: string;
  desde!: string;
  hasta!: string;
  n_orden!: number;
  instituciones!: Institucion[];
}

export class Institucion {
  id!: number;
  institucion!: string;
  link_icono!: string;
  titulos!: any[];
}
