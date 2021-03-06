import { ModuleWithProviders} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from "./user-table/user-table.component";
import { AppointmentTableComponent } from "./appointment-table/appointment-table.component";
import { AppointmentFormComponent } from "./appointment-form/appointment-form.component";
import { AppointmentDetailsComponent } from "./appointment-details/appointment-details.component";

const routes: Routes = [{path: 'user-table', component: UserTableComponent},
                        {path: 'appointment-table', component: AppointmentTableComponent},
                        {path: 'appointment-table/:id', component: AppointmentTableComponent},
                        {path: 'appointment-create-form', component: AppointmentFormComponent},
                        {path: 'appointment-details-form/:id', component: AppointmentDetailsComponent},
                        {path: '', redirectTo: '/appointment-table', pathMatch: 'full'}
                        ];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

