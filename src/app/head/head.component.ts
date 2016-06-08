import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES,RouteConfig} from '@angular/router-deprecated';
import {HomeComponent} from '../home';
import {ContactUsComponent} from '../contact-us';

@Component({
  moduleId: module.id,
  selector: 'app-head',
  templateUrl: 'head.component.html',
  styleUrls: ['head.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/home', component: HomeComponent, name: 'Home'},
  {path: '/contactUs', component: ContactUsComponent, name: 'ContactUs'},
])
export class HeadComponent {

  constructor() {}

}
