import {Bassin} from '../shared/models/Bassin';
import {Component, OnInit} from '@angular/core';
import {MineService, UtilityService} from '../shared';

@Component({
  selector: 'app-bassin-historique',
  templateUrl: './bassin-historique.component.html',
  styleUrls: ['./bassin-historique.component.css']
})
export class BassinHistoriqueComponent implements OnInit {

  bassin: Bassin;

  constructor(private utilityService: UtilityService) {
    this.utilityService.getSelectedBassin().subscribe(data => {
      this.bassin = data as Bassin;
      console.log('refresh bassin-historique component');
    },
      error => console.log(error));
  }

  ngOnInit() {

  }

  nouvelleFiche() {
    this.utilityService.nouvelleVisite();
  }
}
