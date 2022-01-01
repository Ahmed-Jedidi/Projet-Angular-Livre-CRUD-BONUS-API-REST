import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../model/role.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*users: User[] = [{ "username": "admin", "password": "123", "roles": ['ADMIN'] },
  { "username": "nadhem", "password": "123", "roles": ['USER'] }];*/


  //Spring boot 8081
  apiURL: string = 'http://localhost:8081/users/login';


  public loggedUser: string;
  public isloggedIn: Boolean = false;
  //public roles: string[];
  public roles:Role[];


  
  

  constructor(private router: Router,
              //Spring Boot
              private http : HttpClient) { }

  //Spring boot
  getUserFromDB(username:string):Observable<User>
  {
  const url = `${this.apiURL}/${username}`;
  return this.http.get<User>(url);
  }
  


  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User)/*: Boolean*/ {
    this.loggedUser = user.username;
    this.isloggedIn = true;
    this.roles = user.roles;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    /*let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;*/
  }

  isAdmin(): Boolean {
    let admin: Boolean = false;
    if (!this.roles) //this.roles== undefiened
      return false;

    this.roles.forEach((curRole) => {
      if (curRole.role == 'ADMIN') {
           admin = true;
      }
    });
    return admin;
    /*if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
    ;*/
  }


  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string) {
    this.getUserFromDB(username).subscribe((user: User) => {
      this.roles = user.roles;
    });
    /*this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });*/
  }

}
