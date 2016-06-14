import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES,RouteConfig} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-head',
  templateUrl: 'head.component.html',
  styleUrls: ['head.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class HeadComponent {

  constructor() {}

}
