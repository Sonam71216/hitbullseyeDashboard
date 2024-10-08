import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatDrawerContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-default',
    standalone: true,
    templateUrl: './default.component.html',
    styleUrl: './default.component.css',
    imports: [HeaderComponent, FooterComponent, SidebarComponent,MatDrawer, MatDrawerContainer, MatDrawerContent, RouterOutlet]
})
export class DefaultComponent {
    sideBarOpen=true;
    sideBarToggler(){
        this.sideBarOpen = !this.sideBarOpen;
      }
}
