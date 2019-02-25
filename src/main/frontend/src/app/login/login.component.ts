import { fadeAnimation } from '../shared/animation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeAnimation] // register the animation
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  entrer() {
    this.router.navigate(["/gestionbassin"], { skipLocationChange: true });
  }
}
