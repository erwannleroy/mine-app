import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }

  go(destination) {
//    console.log (this.router.url);
//    console.log("route actuelle : " + this.router.url +" , destination :"+destination);
    if (this.router.url != "/"+destination) {
      this.router.navigate([destination]);
    }
  }


}
