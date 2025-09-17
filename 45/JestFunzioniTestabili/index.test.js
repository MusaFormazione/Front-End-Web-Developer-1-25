import { pura, impura, impuraSideEffect } from './index.js';

describe("Funzioni testabili", () => {
  it("dovrebbe testare la funzione pura", () => {
    expect(pura("test")).toBe("Funzione pura eseguita con parametro: test");
  });

  it("dovrebbe testare la funzione pura idempotente", () => {
    expect(pura("xxx")).toBe("Funzione pura eseguita con parametro: xxx");
    expect(pura("xxx")).toBe("Funzione pura eseguita con parametro: xxx");
  });

  it("dovrebbe testare la funzione impura, ma side effect e non idempotenza la faranno fallire", () => {
    expect(impura()).not.toBe("Funzione impura eseguita con parametro globale: parametro di test");
  });

  it("dovrebbe testare la funzione impura con effetto collaterale, ma side effect e non idempotenza la faranno fallire", () => {
    expect(impuraSideEffect()).not.toBe("Funzione impura con effetto collaterale, nuovo parametro globale: parametro di test parametro modificato");
  });
});
