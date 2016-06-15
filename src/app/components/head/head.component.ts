import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {DataService} from '../../services/data-service';

@Component({
  moduleId: module.id,
  selector: 'app-head',
  templateUrl: 'head.component.html',
  styleUrls: ['head.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeadComponent implements OnInit {
  width: number;
  click:boolean=false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.width = window.innerWidth;
    this.dataService.addProp(this, 'headerComponent');
  }
  onResize(event) {
    console.log(window.innerWidth);
    this.width = window.innerWidth;
  }
  toggle(){
    console.log(`before = ${this.click}`);
    this.click=!this.click;
    console.log(`after = ${this.click}`);
  }


}
