import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-foot',
  templateUrl: 'foot.component.html',
  styleUrls: ['foot.component.css']
})
export class FootComponent implements OnInit {
  @Input() copyRight: String;
  @Output('emitter') outPut: EventEmitter<String> = new EventEmitter();
  constructor() { }
  onClick() {
    console.log('clicked');
    this.outPut.emit('lll');
  }
  ngOnInit() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=1687445188183815";
      fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));
  }

}
