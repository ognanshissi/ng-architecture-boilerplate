


// The userService can reside inside User feature module
// If you are using feature module
// And you sure that the service can be used only inside user feature module

// This is only to demonstrate the use of inheritance
import {AbstractService} from "./abstract.service";
import {IUser} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService extends AbstractService<IUser> {
  resources = 'users';
  objectList = [
    {
      email: 'jason@mail.com'
    }
  ];
  constructor(protected http: HttpClient) {
    super(http);
  }
}
