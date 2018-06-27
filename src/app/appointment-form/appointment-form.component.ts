import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/models/appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Submit Button Clicked");
  }

  constructor() { }

  ngOnInit() {
  }

}
