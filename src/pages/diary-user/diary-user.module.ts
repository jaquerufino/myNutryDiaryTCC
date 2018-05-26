import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiaryUserPage } from './diary-user';

@NgModule({
  declarations: [
    DiaryUserPage,
  ],
  imports: [
    IonicPageModule.forChild(DiaryUserPage),
  ],
})
export class DiaryUserPageModule {}
