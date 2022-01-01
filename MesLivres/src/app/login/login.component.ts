import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user = new User();
  erreur=0;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit()/*: void*/ {
  }

  onLoggedin() 
  {
    this.authService.getUserFromDB(this.user.username).subscribe((usr: User) => {
      if (usr.password == this.user.password) {
        this.authService.SignIn(usr);
        this.router.navigate(['/']);
      }
      else
        this.erreur = 1;
    }, (err) => console.log(err));

    /*
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1;*/
  }
  

  

}
