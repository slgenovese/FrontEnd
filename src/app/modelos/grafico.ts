export class Grafico {
  id!: number;
  titulo!: string;
  n_orden!: number;
  habilidadesDatos!: HabilidadesDato[];
}
export class Grafico_sin_ID {
  titulo!: string;
  n_orden!: number;
  habilidadesDatos!: HabilidadesDato_sin_ID[];
}

export class HabilidadesDato {
  id!: number;
  color!: string;
  etiqueta!: string;
  porcentaje!: number;
}
export class HabilidadesDato_sin_ID {
  color!: string;
  etiqueta!: string;
  porcentaje!: number;
}

  