import {Component, OnInit, OnDestroy} from '@angular/core';
import {MineService, UtilityService} from '../shared';
import {Mine} from '../shared/models/Mine';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-mine-list',
  templateUrl: './mine-list.component.html',
  styleUrls: ['./mine-list.component.css']
})
export class MineListComponent implements OnInit, OnDestroy {
  mines: Mine[];
  subscription: Subscription;
  globalSearch: string;

  constructor(private mineService: MineService, private utilityService: UtilityService) {
    this.mineService.getMines().subscribe(mines => {
      this.mines = mines as Mine[];
      console.log('refresh mine-list component');
    },
      error => console.log(error));
  }

  ngOnInit() {
    this.mineService.retrieveAll();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  displayMine(m: Mine) {
    console.log("display", m);
    this.utilityService.selectMine(m);
  }

  updatesMines() {
    console.log("updateMines");
    const formValue = this.globalSearch;
    console.log(formValue);
    if (formValue.trim()!=''){
    this.mineService.findByName(formValue);
      }
    else {
      this.mineService.retrieveAll();
    }
      
  }
}
