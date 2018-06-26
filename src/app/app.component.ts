import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { User} from './shared/models/user.model';
import { Appointment } from './shared/models/appointment.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    //Test Code
    let userList: User[];
    this.apiService.getAllUsers().subscribe((data: Array<User>) => {
      userList = data;
      console.log(userList[2]);
    })

    this.apiService.getAllAppointments().subscribe((data: Array<Appointment>) => {
      console.log(data);
      
      
    })

    this.apiService.getAppointmentViaID(1025).subscribe((data: Appointment) => {
      console.log(data);
    })

    this.apiService.getUserViaID(482).subscribe((data: User) => {
      console.log(data);
    })
  }

}
