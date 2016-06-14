import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data-service';

@Component({
  moduleId: module.id,
  selector: 'app-our-geeks',
  templateUrl: 'our-geeks.component.html',
  styleUrls: ['our-geeks.component.css']
})
export class OurGeeksComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.addProp(this, 'geeksComponent');
  }

}
