import SerializableClass from "@lava.ts/serializable/lib/SerializableClass";
import type { IProjectManager } from "./ProjectManager";

export class Structure extends SerializableClass {
    __name__: string = "LavaStructure"

    get project(): IProjectManager {
        return this.$data._project as IProjectManager;
    }

    get layer(): any[] {
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
