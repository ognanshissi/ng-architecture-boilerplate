import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../core/models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  @Input() users: IUser[];
  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    this.add.emit();
  }

}
