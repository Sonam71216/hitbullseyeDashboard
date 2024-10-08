import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BookingZoneComponent } from './modules/booking-zone/booking-zone.component';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
import { DefaultComponent } from './layouts/default/default.component';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, DashboardComponent, BookingZoneComponent,MatDrawerContainer,MatDrawer,
      DefaultComponent,MatIconButton]
})
export class AppComponent {
  title = 'hitbullseyeDashboard';
}
