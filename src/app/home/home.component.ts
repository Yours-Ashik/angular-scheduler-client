import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; // FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth', // or 'timeGridDay' to see times
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    timeZone: 'local', // or 'UTC', or 'Asia/Dhaka', etc.
    events: [
      {
        title: 'Meeting',
        start: '2025-04-14T10:00:00',
        end: '2025-04-14T12:00:00'
      }
    ]
  }

  // handleDateClick(arg: any) {
  //   alert('Date clicked: ' + arg.dateStr);
  // }

  constructor(private http: HttpClient) {

  }

  scheduleList: any [] = [];

  ngOnInit(): void {
    this.getUser();
  }

  getUser () {
    this.http.get("http://localhost:5000/scheduleData").subscribe((result:any) => {
      this.scheduleList = result
      console.log(this.scheduleList)
    })
  }

}
