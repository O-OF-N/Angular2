import {Injectable} from '@angular/core';
import {Home} from './interfaces.ts';

export class Data {
        //Home Page
        homeComponent:Home =  {
            //Running text [string]
            intro:  `We are an end to end IT consulting company focussed on offering specialized 
            and highly customized technology solutions for small and medium sized businesses. 
            We offer expertise in building systems ground up or migrating to newer platforms 
            to best serve the needs of your business.`,
            //flipping cards
            //front => One side of the cards [String]
            //back => Other side of the card [Array of string]
            cards: [
                {front:"Strategies and Planning",back:['Planning','Project Management','Testing','Training and Implementation']},
                {front:"Technology Assessments",back:['Analyze your IT infrastructure','Identify the vulnerabilities','Set priorities']},
                {front:"Implementation",back:['Test','Re-test','Implement']},
                {front:"Strategies and Planning",back:['Our experts can take care of your project budgeting','We can suggest the best solutions to suite your objectives and budget']},
            ]
        };
}