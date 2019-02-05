import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import {LandingRoutingModule} from './landing-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    AnimateOnScrollModule.forRoot()
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
