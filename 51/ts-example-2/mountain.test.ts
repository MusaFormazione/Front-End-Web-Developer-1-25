import { describe, it, expect } from "vitest";
import type {Mountain} from "./mountain.ts";
import { findNameOfTallestMountain } from "./mountain.ts";

describe("findNameOfTallestMountain", () => {
    it("should return the name of the tallest mountain", () => {
        const mountains: Mountain[] = [
            {name: "Mount Everest", height: 29029},
            {name: "K2", height: 28251},
            {name: "Kangchenjunga", height: 28169},
        ];
        const result = findNameOfTallestMountain(mountains);
        expect(result).toBe("Mount Everest");
    });
});