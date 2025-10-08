import {describe, it, expect} from "vitest";

import { previsioni } from "./meteo";
import type { Rilevazione, Meteo } from "./meteo";

describe("previsioni", () => {
  it("dovrebbe restituire 'soleggiato' per temperatura > 10 e umidita < 50", () => {

    const rilevazione: Rilevazione = {
      temperatura: 15,
      umidita: 40,
      vento: 10,
      pressione: 1015,
    };
    const previsione: Meteo = previsioni(rilevazione);
    expect(previsione).toBe("soleggiato");
  });

  it("dovrebbe restituire 'piovoso' per temperatura < 20 e umidita > 80", () => {
    const rilevazione: Rilevazione = {
      temperatura: 18,
      umidita: 85,
      vento: 5,
      pressione: 1005,
    };
    const previsione: Meteo = previsioni(rilevazione);
    expect(previsione).toBe("piovoso");
  });

  it("dovrebbe restituire 'nuvoloso' per altri casi", () => {
    const rilevazione: Rilevazione = {
      temperatura: 25,
      umidita: 60,
      vento: 15,
      pressione: 1020,
    };
    const previsione: Meteo = previsioni(rilevazione);
    expect(previsione).toBe("nuvoloso");
  });
});
