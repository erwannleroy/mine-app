import { Component, OnInit, Input } from '@angular/core';
import { VisiteBassin } from '../shared/models/VisiteBassin';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-detail-visite-bassin',
  templateUrl: './detail-visite-bassin.component.html',
  styleUrls: ['./detail-visite-bassin.component.scss']
})
export class DetailVisiteBassinComponent implements OnInit {
  
  visiteBassin: VisiteBassin;

  constructor(private utilityService: UtilityService) { 
    this.utilityService.observeSelectedVisiteBassin().subscribe(data => {
      this.visiteBassin = data;
    });
  }

  ngOnInit() {
  }

}
