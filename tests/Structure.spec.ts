import { describe, test, expect } from "vitest";
import Structure from "../lib/Structure";

describe("Structure", () => {

    test("we can create structure", () => {
        const structure = new Structure();
        expect(structure.id).toBeTypeOf("string");
    });
});