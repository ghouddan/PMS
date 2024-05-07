import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ModuleWithProviders } from '@angular/core';
import {
  CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule} from 'ng-circle-progress';
@Component({
  selector: 'app-round-advance-bar',
  standalone: true,
  imports: [NgCircleProgressModule],
  providers: [
    (
      NgCircleProgressModule.forRoot(
        {}
      ) as ModuleWithProviders<NgCircleProgressModule>
    ).providers!,
          ],
  templateUrl: './round-advance-bar.component.html',
  styleUrl: './round-advance-bar.component.css'
})
export class RoundAdvanceBarComponent {

  name = 'Angular';
  options = new CircleProgressOptions();


  optionsA: CircleProgressOptions = {
    ...this.options,
    percent: 90,
    radius: 20,
    showBackground: false,
   
    innerStrokeWidth: 1,
    subtitleFormat: false, // clear subtitleFormat coming from other options, because Angular does not assign if variable is undefined.
    startFromZero: false,
  };


}


