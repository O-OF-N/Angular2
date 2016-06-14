import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class BodyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
