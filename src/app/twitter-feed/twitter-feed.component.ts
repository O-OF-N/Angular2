import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-twitter-feed',
  templateUrl: 'twitter-feed.component.html',
  styleUrls: ['twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {
  url: string = "https://twitter.com/vmisblue";
  ngOnInit() {
    (!function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    } (document, "script", "twitter-wjs"));

  }

}
