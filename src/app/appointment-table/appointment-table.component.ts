import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/models/appointment.model';
import { ApiService } from '../shared/services/api.service';
import { Router, ActivatedRoute} from '@angular/router'
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css' , '../shared/layout/header/header.component.css']
})
export class AppointmentTableComponent implements OnInit {
  appointments: Array<Appointment> = [];
  clickedAppointment = new Appointment();
  appointmentsForUser = false;
  id: number;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.apiService.getAllAppointments().subscribe((data: Appointment[]) =>{
      this.appointments = data;
      if(this.id){
        this.appointmentsForUser = true;
        this.appointments = this.appointments.filter(appointment => appointment.Party.includes(this.id));
      }
      console.log(this.appointments);
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
