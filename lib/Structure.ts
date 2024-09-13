import SerializableClass, { type SerializableClassData } from "@lava.ts/serializable/lib/SerializableClass";
import type { IProjectManager } from "./ProjectManager";

export interface StructureData extends SerializableClassData {
    _project?: IProjectManager;
    _layerName?: string;
}

export class Structure extends SerializableClass {
    __name__: string = "LavaStructure"

    declare $data: StructureData;

    get project() {
        return this.$data._project;
    }

    get layer(): Structure[] {
        if (!(this.project && this.$data._layerName)) {
            return [];
        }
        return this.project.getLayer(this.$data._layerName);
    }

    destroy() {
        if (this.project) {
            this.project.removeStructure(this);
        }
    }
}

export default Structure;
