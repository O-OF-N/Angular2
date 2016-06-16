import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data-service';

@Component({
  moduleId: module.id,
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.addProp(this, 'contactUsComponent');
  }

}
