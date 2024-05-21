import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoundAdvanceBarComponent } from '../round-advance-bar/round-advance-bar.component';
import { CommonModule } from '@angular/common';
import {
  CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule} from 'ng-circle-progress';
import { AngularGradientProgressbarModule } from 'angular-gradient-progressbar';
import { ModuleWithProviders } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-production-view',
  standalone: true,
  imports: [RoundAdvanceBarComponent, NgCircleProgressModule, MatProgressBarModule, AngularGradientProgressbarModule, CommonModule],
  providers: [
    (
      NgCircleProgressModule.forRoot(
        {}
      ) as ModuleWithProviders<NgCircleProgressModule>
    ).providers!,
          ],
  templateUrl: './production-view.component.html',
  styleUrl: './production-view.component.css'
})
export class ProductionViewComponent implements OnInit{
  count : number = 0;
  hight: boolean = false;
  midiun: boolean = false;
  low: boolean = false;
  status : number = 9;


  
  ngOnInit(): void {
    this.setStatus();
     
  }

  options = new CircleProgressOptions();


  optionsA: CircleProgressOptions = {
    ...this.options,
    percent: 90,
    radius: 20,
    showBackground: false,
    showSubtitle : false,
    titleFontSize : "10",
    outerStrokeWidth : 6,
    innerStrokeColor : "rgba(46, 60, 136, 1)",
    innerStrokeWidth: 1,
    subtitleFormat: false, // clear subtitleFormat coming from other options, because Angular does not assign if variable is undefined.
    startFromZero: false,
  };
  
  setStatus():void{
    if (this.status < 5) {
      this.low = true;
    } else if (this.status >= 5 && this.status < 7) {
      this.midiun = true;
    } else {
      this.hight = true;
    }
  
  }


 
  

}
