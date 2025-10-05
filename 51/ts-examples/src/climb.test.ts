import { describe, it, expect } from 'vitest';
import { describeClimb } from './climb';

describe('describeClimb', () => {
    it('deve descrivere correttamente una arrampicata all\'aperto', () => {
        const climb = {
            name: "El Capitan",
            location: "Yosemite",
            grade: "5.13a",
            height: 900,
            isOutdoor: true
        }
        const description = describeClimb(climb)
        expect(description).toBe("El Capitan è un'arrampicata all'aperto situata in Yosemite.\nHa un grado di difficoltà di 5.13a e un'altezza di 900 metri.")
    })
})
