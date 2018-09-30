import { VisiteBassin } from "./VisiteBassin";

export class VisiteMine {
  id: number;
  operateur: string;
  dateVisite: Date;
  contexte: string;
  meteo: string;
  pluviometrie: number;
  visitesBassins: VisiteBassin[];
}

