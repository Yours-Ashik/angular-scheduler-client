import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  calendarOptions: any = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    timeZone: 'local',
    events: [] 
  };

  scheduleList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserSchedules();
  }

  getUserSchedules() {
    this.http.get<any[]>('https://angular-task-server.vercel.app/scheduleData').subscribe(
      (result) => {
        this.scheduleList = result;

        const events = this.scheduleList.map(item => ({
          title: item.title,
          start: `${item.startDate}T${item.startTime}`,
          end: `${item.endDate}T${item.endTime}`,

        }));
        

        
        this.calendarOptions.events = events;
      },
      (error) => {
        console.error('Error fetching schedule data:', error);
      }
    );
  }



  
}
