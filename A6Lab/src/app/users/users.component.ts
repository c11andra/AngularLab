import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:Object
  constructor(data:DataService) { 

    data.getUsers().subscribe(
      d=>this.users = d
    );
  }

  ngOnInit() {
  }

}
