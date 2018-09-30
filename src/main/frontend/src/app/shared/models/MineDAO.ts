import {Deserializable} from './Deserializable';

export class MineDAO implements Deserializable {
  key: string;
  content: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
