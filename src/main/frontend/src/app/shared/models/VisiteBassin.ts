import { Bassin } from "./Bassin";

export class VisiteBassin {
  id: number;
  enEau: boolean;
  couleurEauBassin: string;
  ecoulementEntree: boolean;
  couleurEauEntree: string;
  ecoulementSortie: boolean;
  couleurEauSortie: string;
  etatParois: string;
  presenceRenard: boolean;
  typeIntervention: string;
  bassin: Bassin;
}
