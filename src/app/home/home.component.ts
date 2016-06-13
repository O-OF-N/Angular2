import { Component, OnInit} from '@angular/core';
import {DataService} from '../data-service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(Object.keys(this));
    this.dataService.addProp(this);
    console.log(Object.keys(this));
  }

}
