export class Grafico {
  id!: number;
  titulo!: string;
  n_orden!: number;
  habilidadesDatos!: HabilidadesDato[];
}
export class Grafico_aux {
  id!: number;
  titulo!: string;
  n_orden!: number;
}

export class HabilidadesDato {
  id!: number;
  color!: string;
  etiqueta!: string;
  porcentaje!: number;
}

  