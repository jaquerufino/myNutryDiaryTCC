import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NutritionalPlanPage } from './nutritional-plan';

@NgModule({
  declarations: [
    NutritionalPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(NutritionalPlanPage),
  ],
})
export class NutritionalPlanPageModule {}
