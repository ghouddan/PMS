import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { InformationBarComponent } from '../information-bar/information-bar.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [NavbarComponent, SideBarComponent, InformationBarComponent, BodyComponent],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.css'
})
export class MachinesComponent {

}
