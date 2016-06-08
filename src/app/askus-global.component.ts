import { Component } from '@angular/core';
import {BodyComponent} from './body/';
import {HeadComponent} from './head/';
import {FootComponent} from './foot/';

@Component({
  moduleId: module.id,
  selector: 'askus-global-app',
  templateUrl: 'askus-global.component.html',
  styleUrls: ['askus-global.component.css'],
  directives:[BodyComponent,HeadComponent,FootComponent]
})
export class AskusGlobalAppComponent {
  title = 'askus-global works!';
  cluck(x:string){
    console.log(typeof x);
    console.log(x);
  }
}
