import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsinesComponent } from './usines/usines.component';
import { MachinesComponent } from './machines/machines.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { HomeComponent } from './home/home.component';
import { ProductionViewComponent } from './production-view/production-view.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fact/:usineId', component: UsinesComponent },
  { path: 'atelier/:atelierId', component: AteliersComponent },
  { path: 'machine/:machineId', component: MachinesComponent },
  { path: 'bar', component: ProductionViewComponent }
];
