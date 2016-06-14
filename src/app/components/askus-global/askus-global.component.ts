import { Component } from '@angular/core';
import {BodyComponent} from '../body/';
import {HeadComponent} from '../head/';
import {FootComponent} from '../foot/';
import {TwitterFeedComponent} from '../twitter-feed/';
import {OurGeeksComponent} from '../our-geeks/';
import {ServicesComponent} from '../services/';
import {AboutUsComponent} from '../about-us/';
import {RouteConfig} from '@angular/router-deprecated';
import {HomeComponent} from '../home';
import {ContactUsComponent} from '../contact-us';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'askus-global-app',
  templateUrl: 'askus-global.component.html',
  styleUrls: ['askus-global.component.css'],
  directives:[BodyComponent,HeadComponent,FootComponent,TwitterFeedComponent,OurGeeksComponent,ServicesComponent,AboutUsComponent]
})
@RouteConfig([
  {path: '/home', component: HomeComponent, name: 'Home',useAsDefault: true},
  {path: '/ourGeeks', component: OurGeeksComponent, name: 'OurGeeks'},
  {path: '/contactUs', component: ContactUsComponent, name: 'ContactUs'},
  {path: '/aboutUs', component: AboutUsComponent, name: 'AboutUs'},
  {path: '/services', component: ServicesComponent, name: 'Services'},
  {path: '/trending', component: TwitterFeedComponent, name: 'Trending'},
])
export class AskusGlobalAppComponent {
}
