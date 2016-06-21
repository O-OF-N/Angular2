export interface DataComponent { homeComponent: HomeComponent };
export interface Card { front: string, back: string[] };
export interface HomeComponent { intro: string, cards: Card[] };
export interface GeeksComponent { title: string, persons: Person[] };
export interface Person {
    name: string, imagePath: string, position: string,
    geekMagnets: string, description: string
};
export interface AboutUsComponent { title: string, imagePath: string, description: string };
export interface RouteComponent{name:string,routes:string[]};
export interface HeaderComponent{imagePath:string,menuPath:string,routeComponent:RouteComponent[]};
export interface OtherContact{imagePath:string,link:string};
export interface ContactUsComponent{title: string,addressText:string,address:string,phoneText:string,phoneNo:string,
    otherContactsText:string,otherContacts:OtherContact[]};
export interface Service{header:string,description:string,imagePath:string}
export interface ServicesComponent{title:string,services:Service[],otherServices:string[]};