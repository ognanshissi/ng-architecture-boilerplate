import { Component, OnInit } from '@angular/core';
import {UserService} from "../core/services/user.service";
import {IUser} from "../core/models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList$: Observable<IUser[]>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('Hello users');
    this.userList$ = this.userService.objectListChanged$
  }

  add() {
    this.userService.addUser();
  }

}
