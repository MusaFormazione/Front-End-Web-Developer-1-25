import { somma, divisione, moltiplicazione, sottrazione } from "./math.js";

describe("operazioni aritmetiche", () => {
  test("sommare due numeri", () => {
    expect(somma(2, 3)).toBe(5);
  });

  test("somma tra due stringhe non ammessa", () => {
    expect(somma("sss", "aa")).toBe(null);
  });

  test("somma tra due stringhe numeriche non ammessa", () => {
    expect(somma("473", "66")).not.toBe("47366");
    expect(somma("473", "66")).toBe(null);
  });

  test("divisione per zero non ammessa", () => {
    expect(divisione(5, 0)).toBe(null);
  });

  test("divisione tra due stringhe non ammessa", () => {
    expect(divisione("sss", "aa")).toBe(null);
  });

  test("divisione fra due interi", () => {
    expect(divisione(6, 2)).toBe(3);
  });

});
