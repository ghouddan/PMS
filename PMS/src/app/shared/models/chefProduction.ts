import { UserData } from "./Users";
import { usine } from "./usine";

export interface chefProduction extends UserData{
    idUsine : usine[]
    
} 