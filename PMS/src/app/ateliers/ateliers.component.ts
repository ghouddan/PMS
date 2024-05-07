import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { InformationBarComponent } from '../information-bar/information-bar.component';

@Component({
  selector: 'app-ateliers',
  standalone: true,
  imports: [NavbarComponent, SideBarComponent, InformationBarComponent],
  templateUrl: './ateliers.component.html',
  styleUrl: './ateliers.component.css'
})
export class AteliersComponent {

}
