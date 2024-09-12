import type Structure from "./Structure";
export interface IProjectManager {

    structures: Record<string, Structure>;

    getLayer(layerName: string): Structure[];

    addStructure(structure: Structure, layerName?: string): void;

    removeStructure(structure: Structure): void;
}
