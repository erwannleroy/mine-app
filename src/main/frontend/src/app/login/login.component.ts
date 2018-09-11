import { fadeAnimation } from '../shared/animation';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
