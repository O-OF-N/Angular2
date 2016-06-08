import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {HomeComponent} from '../home';
import {ContactUsComponent} from '../contact-us';

@Component({
  moduleId: module.id,
  selector: 'app-head',
  templateUrl: 'head.component.html',
  styleUrls: ['head.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/contactUs', component: ContactUsComponent},
])
export class HeadComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
