import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InformationBarComponent } from './information-bar/information-bar.component';
import { UsinesComponent } from './usines/usines.component';
import { MachinesComponent } from './machines/machines.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { HomeComponent } from './home/home.component';
import { RoundAdvanceBarComponent } from './round-advance-bar/round-advance-bar.component';
import { ProductionViewComponent } from './production-view/production-view.component';

export const routes: Routes = [
    {path : '', component : LoginComponent},
    // {path : "navbar", component :NavbarComponent},
    {path : 'fact', component : UsinesComponent},
    // {path : 'fact', component : InformationBarComponent},
    {path : 'machine', component : MachinesComponent},
    {path : 'atelier', component : AteliersComponent},
    {path:'home', component:HomeComponent},
    {path : 'bar', component : ProductionViewComponent}

    
];
