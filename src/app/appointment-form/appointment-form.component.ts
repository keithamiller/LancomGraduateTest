import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/models/appointment.model';
import { User } from '../shared/models/user.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  userList: Array<User> = [];
  model = new Appointment();
  


  onSubmit() {
    console.log("Submit Button Clicked");
    console.log(this.model);
    this.createNewAppointment();
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((data: User[]) => {
      this.userList = data;
    })

    this.model.providerEmail = this.apiService.PROVIDER_EMAIL;
  }

  createNewAppointment() {
    //Do some validation stuff if needed.
    this.apiService.createAppointment(this.model).subscribe((res: Response) => {
      console.log(res);
    })
    
  }

}
