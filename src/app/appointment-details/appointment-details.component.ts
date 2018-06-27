import { Component, OnInit } from '@angular/core';
import { Appointment} from '../shared/models/appointment.model';
import { User} from '../shared/models/user.model';
import { ApiService } from '../shared/services/api.service'
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  userList: Array<User> = [];
  id: number = +this.route.snapshot.paramMap.get('id');
  model = new Appointment();
  dataReady = false;
  
  

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  onSubmit() {
    console.log("Submit Button Clicked");
    console.log(this.model);
    this.editAppointment();
  }


  ngOnInit() {
    console.log(this.model);
    this.apiService.getAppointmentViaID(this.id).subscribe((data) => {
      this.model = data as Appointment;
      console.log(this.model);
      this.dataReady = true;
    })

    this.apiService.getAllUsers().subscribe((data: User[]) => {
      this.userList = data;
    })
  }

  editAppointment() {
    this.apiService.updateAppointment(this.model).subscribe((res: Response) => {
      console.log(res);
    })

  }

  deleteAppointment(){
    this.apiService.deleteAppointment(this.id).subscribe((res: Response) => {

    })

    this.router.navigate(['appointment-table']);
  }



}
