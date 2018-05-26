import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeNutriPage } from '../pages/home-nutri/home-nutri';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { RegisterPage } from '../pages/register/register';
import { RegisterNutriPage } from '../pages/register-nutri/register-nutri';
import { DiaryUserPage } from '../pages/diary-user/diary-user';
import { ChatUserPage } from '../pages/chat-user/chat-user';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { AlterPasswordEmailPage } from '../pages/alter-password-email/alter-password-email';
import { NutritionalPlanPage } from '../pages/nutritional-plan/nutritional-plan';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeNutriPage,
    ListPage,
    LoginPage,
    RegisterPage,
    RegisterNutriPage,
    DiaryUserPage,
    ResetPasswordPage,
    ChatUserPage,
    MyProfilePage,
    AlterPasswordEmailPage,
    NutritionalPlanPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeNutriPage,
    ListPage,
    LoginPage,
    RegisterPage,
    RegisterNutriPage,
    DiaryUserPage,
    ResetPasswordPage,
    ChatUserPage,
    MyProfilePage,
    AlterPasswordEmailPage,
    NutritionalPlanPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
