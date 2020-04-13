import { Component, OnInit } from '@angular/core';
import {UserService} from "../core/services/user.service";
import {IUser} from "../core/models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('Hello users');
    this.userService.objectListChanged$.subscribe(data => console.log(data));
  }

  add(item: IUser) {

  }

}
