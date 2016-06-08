import { Component } from '@angular/core';
import {BodyComponent} from './body/';
import {HeadComponent} from './head/';
import {FootComponent} from './foot/';
import {TwitterFeedComponent} from './twitter-feed/';
import {RouteConfig} from '@angular/router-deprecated';
import {HomeComponent} from './home';
import {ContactUsComponent} from './contact-us';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'askus-global-app',
  templateUrl: 'askus-global.component.html',
  styleUrls: ['askus-global.component.css'],
  directives:[BodyComponent,HeadComponent,FootComponent,TwitterFeedComponent]
})
@RouteConfig([
  {path: '/home', component: HomeComponent, name: 'Home'},
  {path: '/contactUs', component: ContactUsComponent, name: 'ContactUs'},
])
export class AskusGlobalAppComponent {
  title = 'askus-global works!';
  cluck(x:string){
    console.log(typeof x);
    console.log(x);
  }
}
