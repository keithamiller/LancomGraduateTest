import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})


export class UserTableComponent implements OnInit {

  public users: Array<User> = [];
  dataReady = false;
  constructor(private apiService: ApiService, private router: Router) { }

  

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
      this.dataReady = true;
    })
  }

  rowClicked(event){
    console.log(event);
    let selection : User = event.data as User;

    this.router.navigate(['appointment-table', selection.Id]);

  }

  settings = {
    columns: {
      Name: {
        title: 'Name'
      },
      Id: {
        title: 'ID'
      }
    },actions: false,
    attr:{
      class: 'table table-bordered'
    }
  };
}


