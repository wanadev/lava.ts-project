import { describe, test, expect } from "vitest";
import Structure from "../lib/Structure";
import { IProjectManager } from "../lib/ProjectManager";

describe("Structure", () => {

    test("we can create structure", () => {
        const structure = new Structure();
        expect(structure.id).toBeTypeOf("string");
    });

    test("structures ids are different", () => {
        const structure1 = new Structure();
        const structure2 = new Structure();
        expect(structure1.id).not.toBe(structure2.id);
    });

    describe("retrocompatibilty with Obsidian Project Manager", () => {


        class TestProjectManager implements IProjectManager {

            public layers: Record<string, Structure[]> = {}
            public structures: Record<string, Structure> = {};

            getLayer(layerName: string): Structure[] {
                return this.layers[layerName] ?? [];
            }

            addStructure(structure: Structure, layerName = "default"): void {
                if (this.structures[structure.id]) {
                    this.removeStructure(structure.id);
                }
                structure.$data._project = this;
                structure.$data._layerName = layerName;
                this.structures[structure.id] = structure;
                this.layers[layerName] = this.layers[layerName] ?? [];
                this.layers[layerName].push(structure);
            }

            removeStructure(structure: Structure | string) {
                structure = (structure instanceof Structure) ? structure : this.structures[structure];
                structure.layer.splice(structure.layer.indexOf(structure), 1);
                delete this.structures[structure.id];
                structure.$data._project = undefined;
                structure.$data._layerName = undefined;
            }
        }

        test("add structure in project manager", () => {
            const projectManager = new TestProjectManager();
            const structure = new Structure();
            projectManager.addStructure(structure, "myLayer");
            expect(structure.layer).toBe(projectManager.layers["myLayer"])
            expect(structure.project).toBe(projectManager);
            expect(projectManager.structures[structure.id]).toBe(structure);
        })

        test("remove structure from project manager", () => {
            const projectManager = new TestProjectManager();
            const structure = new Structure();
            projectManager.addStructure(structure, "myLayer");
            projectManager.removeStructure(structure);
            expect(structure.layer).toStrictEqual([]);
            expect(structure.project).toBeUndefined();
            expect(projectManager.structures[structure.id]).toBeUndefined();
        })
    })
});