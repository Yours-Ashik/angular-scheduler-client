import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  imports: [ NavbarComponent,HomeComponent,FullCalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-task-client';
}
