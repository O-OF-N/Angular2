import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES,RouteConfig} from '@angular/router-deprecated';
import {DataService} from '../../services/data-service';

@Component({
  moduleId: module.id,
  selector: 'app-head',
  templateUrl: 'head.component.html',
  styleUrls: ['head.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class HeadComponent implements OnInit {

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.dataService.addProp(this,'headerComponent');
  }

}
