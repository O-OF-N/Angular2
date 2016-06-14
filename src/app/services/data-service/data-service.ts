import {Injectable, Inject} from '@angular/core';
import {Data} from '../../data';

@Injectable()
export class DataService {
    data: Object;
    constructor(data: Data) {
        this.data = data;
    }

    addProp(instance: Object, componentName: string) {
        let componentData = this.data[componentName]
        for (let value in componentData) {
            instance[value] = this.data[componentName][value];
        }
    }
}