import { atelier } from "./atelier";

export interface machine{
    id : number,
    nomMachine :string,
    typeMachine: string ,
    fonction : string,
    etat : boolean,
    idAtelier : atelier
}