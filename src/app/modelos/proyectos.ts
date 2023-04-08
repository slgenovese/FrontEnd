export class Proyectos {
  id!: number;
  texto!: string;
  desde!: string;
  hasta!: string;
  n_orden!: number;
  institucion!: Institucion[];
}

export class Institucion {
  id!: number;
  institucion!: string;
  link_icono!: string;
  titulo!: any[];
}
