import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Appointment } from '../models/appointment.model';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = 'http://devtechtest.previewourapp.com';
  PROVIDER_EMAIL = 'keithmillerhimself@gmail.com';
  constructor(private httpClient: HttpClient) { }

  //TODO: Move User and Appointment calls to indivduals files
  //User API Calls
  getAllUsers(){
    return this.httpClient.get(this.API_URL + '/api/User?providerEmail=' + this.PROVIDER_EMAIL);
  }

  getUserViaID(id: number){
    return this.httpClient.get(this.API_URL + '/api/User/' + id + '?providerEmail=' + this.PROVIDER_EMAIL);
  }

  //Appointment API Calls
  getAllAppointments(){
    return this.httpClient.get(this.API_URL + '/api/Appointment?providerEmail=' + this.PROVIDER_EMAIL);
  }

  getAppointmentViaID(id: number){
    return this.httpClient.get(this.API_URL + '/api/Appointment/' + id + '?providerEmail=' + this.PROVIDER_EMAIL);
  }

  createAppointment(appointment: Appointment){
    return this.httpClient.post(this.API_URL + '/api/Appointment?providerEmail=' + this.PROVIDER_EMAIL, appointment);
  }

  updateAppointment(appointment: Appointment){
    return this.httpClient.put(this.API_URL + '/api/Appointment/' + appointment.id + '?providerEmail=' + this.PROVIDER_EMAIL, appointment);
  }

  deleteAppointment(appointment: Appointment){
    return this.httpClient.delete(this.API_URL + '/api/Appointment/' + appointment.id + '?providerEmail=' + this.PROVIDER_EMAIL)
  }


}
