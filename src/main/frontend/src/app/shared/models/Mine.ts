import {Bassin} from './Bassin';
import {Deserializable} from './deserializable';

export class Mine implements Deserializable {
  id: number;
  nom: string;
  gps: string;
  bassins: Bassin[];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
