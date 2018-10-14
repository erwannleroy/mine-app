import { Component, OnInit, Input } from '@angular/core';
import { VisiteMine } from '../shared/models/VisiteMine';
import { VisiteBassin } from '../shared/models/VisiteBassin';
import { Bassin } from '../shared/models/Bassin';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-mine-visite',
  templateUrl: './mine-visite.component.html',
  styleUrls: ['./mine-visite.component.scss']
})
export class MineVisiteComponent implements OnInit {

  visiteBassin: VisiteBassin;
  visiteMineSelected: VisiteMine;
  @Input()
  visiteMine: VisiteMine;


  
  constructor(private utilityService: UtilityService) {
    this.utilityService.getSelectedVisiteMine().subscribe(data => {
      this.visiteMineSelected = data;
    });
  }

  ngOnInit() {
  }


  onSelectBassin(b: Bassin) {
    console.log("Sélection du bassin : ", b.nom);
    for (let vb of this.visiteMine.visitesBassins) {
      if (vb.bassin == b) {
        this.displayDetail(vb);
        break;
      }
    }
  }

  displayDetail(vb: VisiteBassin) {
    this.visiteBassin = vb;
    this.utilityService.setSelectedVisiteBassin(vb);
    console.log("display visite bassin : ", vb.id);
  }

}
