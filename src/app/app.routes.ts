import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { BookingZoneComponent } from './modules/booking-zone/booking-zone.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { OurCoursesComponent } from './modules/our-courses/our-courses.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ChangePasswordComponent } from './modules/profile/change-password/change-password.component';
import { CourseDetailsComponent } from './modules/profile/course-details/course-details.component';
import { LoginComponent } from './layouts/login/login.component';
import { LandingComponent } from './layouts/landing/landing.component';

import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'', component:DefaultComponent,
    children:[
    { path: '', component: DashboardComponent },
    { path: 'bookingzone', component: BookingZoneComponent },
    { path: 'inbox', component: InboxComponent },
    { path: 'our-courses', component: OurCoursesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'change-password', component: ChangePasswordComponent},
    { path: 'course-details', component: CourseDetailsComponent },
    /*{
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }*/
]},
{path:'login', component: LoginComponent},
{path:'landing', component:LandingComponent}

];
