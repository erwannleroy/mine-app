import { Evenement } from './Evenement';

export class Bassin {
  id: number;
  nom: string;
  volumeObjectif: number;
  volumeReel: number;
  gps: string;
  evenements: Evenement[];
}
