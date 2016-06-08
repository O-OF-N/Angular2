import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-foot',
  templateUrl: 'foot.component.html',
  styleUrls: ['foot.component.css']
})
export class FootComponent {
  @Input() copyRight:String;
  @Output('emitter') outPut:EventEmitter<String> = new EventEmitter();
  constructor() {}
  onClick(){
    console.log('clicked');
    this.outPut.emit('lll');
  }

}
