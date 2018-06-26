import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getAllUsers().subscribe((data: Array<object>) => {
      console.log(data);
    })

    this.apiService.getAllAppointments().subscribe((data: Array<object>) => {
      console.log(data);
    })

    this.apiService.getAppointmentViaID(1025).subscribe((data: object) => {
      console.log(data);
    })
  }

}
