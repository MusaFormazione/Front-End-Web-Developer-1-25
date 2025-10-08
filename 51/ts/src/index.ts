import { previsioni  } from "./meteo";
import type { Rilevazione, Meteo } from "./meteo";

function meteo() {
  const rilevazione: Rilevazione = {
    temperatura: 15,
    umidita: 40,
    vento: 10,
    pressione: 1015,
  };

  const previsione: Meteo = previsioni(rilevazione);
  console.log(`La previsione del tempo è: ${previsione}`);
}

meteo();
