import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/models/appointment.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css' , '../shared/layout/header/header.component.css']
})
export class AppointmentTableComponent implements OnInit {
  appointments: Array<Appointment> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllAppointments().subscribe((data: Appointment[]) =>{
      this.appointments = data;
      console.log(data);
      console.log(this.appointments);
    })
  }

  settings = {
    columns: {
      Id: {
        title: 'ID'
      },
      Description: {
        title: 'Description'
      },
      Party: {
        title: 'Party ID\'s'
      },
      Start: {
        title: 'Start'
      },
      End: {
        title: 'End'
      },
      Notes: {
        title: 'Notes'
      }
    },
    actions: false
  }

}
