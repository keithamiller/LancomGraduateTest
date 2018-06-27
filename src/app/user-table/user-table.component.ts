import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})


export class UserTableComponent implements OnInit {

  public users: Array<User> = [];
  dataReady = false;
  constructor(private apiService: ApiService) { }

  

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
      this.dataReady = true;
    })
  }

  rowClicked(data){
    console.log(data);
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


