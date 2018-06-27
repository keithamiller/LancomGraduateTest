import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { User} from './shared/models/user.model';
import { Appointment } from './shared/models/appointment.model';
import { UserTableComponent } from './user-table/user-table.component'



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

    })

    this.apiService.getAllAppointments().subscribe((data: Array<Appointment>) => {
      
      
    })

    this.apiService.getAppointmentViaID(1025).subscribe((data: Appointment) => {

    })

    this.apiService.getUserViaID(482).subscribe((data: User) => {

    })
  }

}
