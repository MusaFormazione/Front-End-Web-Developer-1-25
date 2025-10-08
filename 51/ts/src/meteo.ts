export type Meteo = "soleggiato" | "nuvoloso" | "piovoso";
export interface Rilevazione {
  temperatura: number; // in gradi Celsius
  umidita: number; // in percentuale
  vento: number; // in km/h
  pressione: number; // in hPa
}

export function previsioni( rilevazione: Rilevazione): Meteo {
  const { temperatura, umidita, vento, pressione } = rilevazione;

  if (temperatura > 10 && umidita < 50) {
    return "soleggiato";
  } else if (temperatura < 20 && umidita > 80) {
    return "piovoso";
  } else {
    return "nuvoloso";
  }
}
