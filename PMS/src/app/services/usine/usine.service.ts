import { Injectable } from '@angular/core';
import { usine } from '../../shared/models/usine';
import { atelier } from '../../shared/models/atelier';
import { machine } from '../../shared/models/machine';

@Injectable({
  providedIn: 'root'
})
export class UsineService {
  private usines: usine[] = [
    {
      id: 1,
      nomUsine: 'Usine A',
      adresse: '123 Main Street',
      chefUsine: 'John Doe',
      nombrePersonne: 50,
      nombreMachines: 5,
      idAtelier: [
        {
          id: 1,
          nomAtelier: 'Atelier A',
          chefAtelier: 'Alice Smith',
          nombrePersonne: 10,
          nombreMachines: 2,
          capaciteMaximale: '10 items/jour',
          usineId: 1,
          idmachine: [
            {
              id: 1,
              nomMachine: 'Machine 1',
              typeMachine: 'Type A',
              fonction: 'Function A',
              etat: true,
              capaciteMaximale: '10 items/jour',
              chefMachine: 'Jon Look',
              idAtelier: 1,
              productName: 'Product A',
              production: 100
            },
            {
              id: 2,
              nomMachine: 'Machine 2',
              typeMachine: 'Type B',
              fonction: 'Function B',
              etat: false,
              capaciteMaximale: '10 items/jour',
              chefMachine: 'Smith Look',
              idAtelier: 1,
              productName: 'Product B',
              production: 150
            }
          ]
        }
      ]
    },
    {
      id: 2,
      nomUsine: 'Usine B',
      adresse: '123 Local Street',
      chefUsine: 'John Smith',
      nombrePersonne: 75,
      nombreMachines: 7,
      idAtelier: [
        {
          id: 6,
          nomAtelier: 'Atelier C',
          chefAtelier: 'Alice Smith',
          nombrePersonne: 10,
          nombreMachines: 1,
          capaciteMaximale: '10 items/jour',
          usineId: 2,
          idmachine: [
            {
              id: 6,
              nomMachine: 'Machine 6',
              typeMachine: 'Type E',
              fonction: 'Function E',
              etat: true,
              capaciteMaximale: '10 items/jour',
              chefMachine: 'Simp Look',
              idAtelier: 6,
              productName: 'Product E',
              production: 300
            }
          ]
        },
        {
          id: 2,
          nomAtelier: 'Atelier B',
          chefAtelier: 'Alice Smith',
          nombrePersonne: 10,
          nombreMachines: 2,
          capaciteMaximale: '20 items/jour',
          usineId: 2,
          idmachine: [
            {
              id: 3,
              nomMachine: 'Machine 3',
              typeMachine: 'Type C',
              fonction: 'Function C',
              etat: true,
              capaciteMaximale: '10 items/jour',
              chefMachine: 'Pedro Look',
              idAtelier: 2,
              productName: 'Product C',
              production: 200
            },
            {
              id: 4,
              nomMachine: 'Machine 4',
              typeMachine: 'Type D',
              fonction: 'Function D',
              etat: false,
              capaciteMaximale: '10 items/jour',
              chefMachine: 'Marck Look',
              idAtelier: 2,
              productName: 'Product D',
              production: 120
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  getUsines(): usine[] {
    return this.usines;
  }

  getUsineById(usineId: number): usine | undefined {
    return this.usines.find(usine => usine.id === usineId);
  }
}
