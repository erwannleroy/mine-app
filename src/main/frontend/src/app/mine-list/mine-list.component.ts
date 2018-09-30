import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MineService } from '../shared';
import { fadeAnimation } from '../shared/animation';
import { Mine } from '../shared/models/Mine';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mine-list',
  templateUrl: './mine-list.component.html',
  styleUrls: ['./mine-list.component.scss']
})
export class MineListComponent implements OnInit, OnDestroy {
  mines: Mine[];
  globalSearch: string;
  mineSelected: Mine;

  @Output() notify: EventEmitter<Mine> = new EventEmitter<Mine>();

  constructor(private mineService: MineService) {
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
  }

  selectMine(m: Mine) {
    console.log("select mine", m);
    this.mineSelected = m;
    this.notify.emit(this.mineSelected);
  }

  updatesMines() {
    console.log("updateMines");
    const formValue = this.globalSearch;
    console.log(formValue);
    if (formValue.trim() != '') {
      this.mineService.findByName(formValue);
    }
    else {
      this.mineService.retrieveAll();
    }

  }
}
