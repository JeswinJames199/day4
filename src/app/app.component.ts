import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pagees/navbar/navbar.component';
import { SingleComponent } from './pagees/single/single.component';
import { LoginComponent } from './pagees/login/login.component';
import { MapComponent } from './pagees/map/map.component';
import { FooterComponent } from './pagees/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,LoginComponent,MapComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day4';
}
