import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingZoneComponent } from './booking-zone/booking-zone.component';
import { InboxComponent } from './inbox/inbox.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { CourseDetailsComponent } from './profile/course-details/course-details.component';
@NgModule({
  declarations: [],
  imports: [
   CommonModule,
   BookingZoneComponent,
   InboxComponent,
   OurCoursesComponent,
   ProfileComponent,
   ChangePasswordComponent,
   CourseDetailsComponent
  ]
})
export class ModulesModule { }
