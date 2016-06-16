import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data-service';

@Component({
  moduleId: module.id,
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {
        this.dataService.addProp(this, 'servicesComponent');
  }

}
