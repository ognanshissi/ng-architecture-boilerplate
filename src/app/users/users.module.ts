import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {UsersRoutingModule} from "./users-routing.module";
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [UserListComponent, UsersComponent],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
