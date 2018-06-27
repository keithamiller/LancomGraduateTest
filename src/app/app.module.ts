import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table'
import { ApiService } from './shared/services/api.service';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { routingModule} from './app.routing';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component'
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    HeaderComponent,
    FooterComponent,
    UserTableComponent,
    AppointmentTableComponent,
    AppointmentFormComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SmartTableModule,
    routingModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
