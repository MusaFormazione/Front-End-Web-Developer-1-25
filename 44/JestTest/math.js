const somma = (a, b) => {
  if(typeof a !== "number" || typeof b !== "number") {
    return null;
  }
  return a + b;
};

const divisione = (a, b) => {
  // Controlla che b non sia zero e che entrambi siano numeri
  if(typeof a !== "number" || typeof b !== "number" || b === 0) {
    return null;
  }
  return a / b;
};

const sottrazione = (a, b) => {
  if(typeof a !== "number" || typeof b !== "number") {
    return null;
  }
  return a - b;
};

const moltiplicazione = (a, b) => {
  if(typeof a !== "number" || typeof b !== "number") {
    return null;
  }
  return a * b;
}


export { somma, divisione, sottrazione, moltiplicazione };
