import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../shared';
import { Bassin } from '../shared/models/Bassin';

@Component({
  selector: 'app-releve-bassin-form',
  templateUrl: './releve-bassin-form.component.html',
  styleUrls: ['./releve-bassin-form.component.css']
})
export class ReleveBassinFormComponent implements OnInit {

  visite: Boolean;

  constructor(private utilityService: UtilityService) {
    this.utilityService.isVisite().subscribe(data => {
      this.visite = data as Boolean;
      console.log('refresh releve bassin component');
    },
      error => console.log(error));
  }

  ngOnInit() {
  }

}
