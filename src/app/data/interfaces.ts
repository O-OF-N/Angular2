export interface DataComponent { homeComponent: HomeComponent };
export interface Card { front: string, back: string[] };
export interface HomeComponent { intro: string, cards: Card[] };
export interface GeeksComponent { title: string, persons: Person[] };
export interface Person {
    name: string, imagePath: string, position: string,
    geekMagnets: string, description: string
};
export interface AboutUsComponent { title: string, imagePath: string, description: string };