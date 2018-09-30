import {Bassin} from './Bassin';
import {VisiteMine} from './VisiteMine';

export class Mine {
  id: number;
  nom: string;
  gps: string;
  bassins: Bassin[];
  visitesMines: VisiteMine[];

}
