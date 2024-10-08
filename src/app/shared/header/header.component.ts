import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatDrawerContent } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, MatDrawerContent, MatIconModule, MatButtonModule, MatToolbarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSideBarForMe: EventEmitter<any>= new  EventEmitter();
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
}
