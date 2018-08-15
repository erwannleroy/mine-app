import {MineService} from '../shared';
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-global-search-form',
  templateUrl: './global-search-form.component.html',
  styleUrls: ['./global-search-form.component.css']
})
export class GlobalSearchFormComponent implements OnInit {
  globalSearch: string;

  constructor(private mineService: MineService) {}

  ngOnInit() {
  }

  updatesMines() {
    console.log("updateMines");
    const formValue = this.globalSearch;
    console.log(formValue);
    this.mineService.findByName(formValue);
  }

}
