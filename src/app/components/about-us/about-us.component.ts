import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data-service';

@Component({
  moduleId: module.id,
  selector: 'app-about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.addProp(this, 'aboutUsComponent');

  }

}
