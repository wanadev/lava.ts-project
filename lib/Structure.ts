import SerializableClass, { type SerializableClassData } from "@lava.ts/serializable/lib/SerializableClass";
import type { IProjectManager } from "./ProjectManager";

export interface StructureData extends SerializableClassData {
    _project: IProjectManager;
    _layerName: string;
}

export class Structure<DataType extends StructureData = StructureData> extends SerializableClass<DataType> {
    __name__: string = "LavaStructure"

    get project() {
        return this.$data._project;
    }

    get layer(): Structure[] {
        if (!this.project) {
            return [];
        }
        return this.project.getLayer(this.$data._layerName as string);
    }

    destroy() {
        if (this.project) {
            this.project.removeStructure(this);
        }
    }
}

export default Structure;
