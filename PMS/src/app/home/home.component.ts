import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { InformationBarComponent } from '../information-bar/information-bar.component';
import { BodyComponent } from '../body/body.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, InformationBarComponent, SideBarComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
