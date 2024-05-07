import { UserData } from "./Users";
import { atelier } from "./atelier";

export interface chefUsine extends UserData{
    idAtelier : atelier[]
}