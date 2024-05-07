import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from './navbar/navbar.component';
import { InformationBarComponent } from './information-bar/information-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormComponent } from './form/form.component';
import { NgIf } from '@angular/common';
import { UsinesComponent } from './usines/usines.component';
import { BodyComponent } from './body/body.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
        LoginComponent,
        NavbarComponent,
        InformationBarComponent,
        SideBarComponent,
        FormComponent,
        NgIf,
        UsinesComponent,
        BodyComponent,
        NgCircleProgressModule        
            ],
})
export class AppComponent {
  title = 'PMS';
}
