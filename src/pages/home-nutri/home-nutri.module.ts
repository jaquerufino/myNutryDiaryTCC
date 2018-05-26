import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNutriPage } from './home-nutri';

@NgModule({
  declarations: [
    HomeNutriPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNutriPage),
  ],
})
export class HomeNutriPageModule {}
