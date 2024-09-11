# @lava.ts/project

## Name
Lava.ts project

## Description
Typescript classes for structure and project-manager

## Installation

```
npm install @lava.ts/project
```

## Usage

```ts
import Structure from "@lava.ts/project/lib/Structure";
import { AutoSerializer } from "@lava.ts/serializable/lib/AutoSerializer";
import { addSerializer } from "@lava.ts/serializable/lib/serializers";

export class MyDataStructure extends Structure {
    public static __name__ = "my-data-structure";

    public __name__ = MyDataStructure.__name__;

    get someInfo() {
        return this.$data.someInfo;
    }

    set someInfo(someInfo) {
        this.$data.someInfo = someInfo;
    }
}

addSerializer(new AutoSerializer(MyDataStructure.__name__, MyDataStructure));

export default MyDataStructure;
```

## Support
Submit issue on github

## Roadmap
* Structure
* ProjectManager
* History

## Contributing
Not open for contribution at the moment. Currently building the first steps of the librairy

## Authors and acknowledgment
- [Wanadev](https://wanadev.com)

## License
BSD-3-Clause

## Project status
Currently building the first steps of the librairy
