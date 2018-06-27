import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/models/appointment.model';
import { ApiService } from '../shared/services/api.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css' , '../shared/layout/header/header.component.css']
})
export class AppointmentTableComponent implements OnInit {
  appointments: Array<Appointment> = [];
  clickedAppointment = new Appointment();

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getAllAppointments().subscribe((data: Appointment[]) =>{
      this.appointments = data;
    })
  }

  rowClicked(event){
    console.log(event);
    console.log(event.data);
    let selection : Appointment = event.data as Appointment;

    this.router.navigate(['appointment-details-form', selection.Id]);
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
