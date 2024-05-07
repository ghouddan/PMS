import { machine } from "./machine";

export interface atelier{
    id : number,
    nomAtelier : string,
    chefAtelier : string,
    nombrePersonel : number,
    idmachine : machine[],
    
}