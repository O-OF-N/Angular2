export class DataService implements OnInit{
   
    constructor(private a:object){}
    ngOnInit() {
 this.a:object = {x:1,y:2,z:3};
  }
    addProp(instance:object){
        for(a1 in a){
            instance[a1]=a[a1];
        }
    }
}