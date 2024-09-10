export interface IProjectManager {
    getLayer(layerName: string): any[];

    removeStructure(structure: any): void;
}
