import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultComponent,
    LoginComponent,
    LandingComponent
  ]
})
export class LayoutsModule { }
