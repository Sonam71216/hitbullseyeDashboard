import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [MatSidenavModule,MatFormFieldModule,MatSelectModule, MatButtonModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {

}
