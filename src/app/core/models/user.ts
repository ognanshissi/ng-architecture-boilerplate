
export interface IUser {
  email: string;
}



// In case you are planing to use class to define your models
export class User {
  public email;

  constructor(email) {
    this.email = email;
  }
}
