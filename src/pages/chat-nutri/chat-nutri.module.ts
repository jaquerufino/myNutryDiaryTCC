import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatNutriPage } from './chat-nutri';

@NgModule({
  declarations: [
    ChatNutriPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatNutriPage),
  ],
})
export class ChatNutriPageModule {}
