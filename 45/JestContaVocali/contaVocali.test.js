// contaVocali.test.js
// Test della funzione contaVocali con Jest
import contaVocali from './contaVocali.js'

describe('contaVocali', () => {
  // Test con solo vocali
  test('Conta tutte le vocali in una stringa di sole vocali', () => {
    expect(contaVocali('aeiouAEIOU')).toBe(10)
  })

  // Test senza vocali
  test('Restituisce 0 se non ci sono vocali', () => {
    expect(contaVocali('bcdfg')).toBe(0)
  })

  // Test con stringa mista
  test('Conta solo le vocali in una stringa mista', () => {
    expect(contaVocali('Ciao Mondo')).toBe(5)
  })

  // Test negativo con .not.toBe()
  test('Il risultato non deve essere un valore errato', () => {
    expect(contaVocali('Ciao')).not.toBe(5)
  })

  // Extra: stringa vuota
  test('Restituisce 0 per stringa vuota', () => {
    expect(contaVocali('')).toBe(0)
  })

  // Extra: caratteri speciali e numeri
  test('Ignora numeri e caratteri speciali', () => {
    expect(contaVocali('123!@#aei')).toBe(3)
    expect(contaVocali('123!@#aeib')).toBe(3)
  })


  // Verifica l'idempotenza della funzione
  test('Idempotenza: chiamate multiple con lo stesso input danno lo stesso output', () => {
    const input = 'Esempio di stringa per testare l\'idempotenza'
    const firstCall = contaVocali(input)
    const secondCall = contaVocali(input)
    expect(firstCall).toBe(secondCall)
  })
})
