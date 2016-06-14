export interface DataComponent{homeComponent:HomeComponent};
export interface Card{front:string,back:string[]};
export interface HomeComponent{intro:string,cards:Card[]};