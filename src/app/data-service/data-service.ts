
export class DataService  {
    a:Object;
    constructor() { 

        this.a = { x: 1, y: 2, z: 3 };
    }
    
    addProp(instance: any) {
        console.log('a1='+Object.keys(instance));
        console.log('a1='+this.a);
        for (let a1 in this.a) {
            console.log(a1);
            instance[a1] = this.a[a1];
        }
        console.log('a1='+Object.keys(instance));
    }
}