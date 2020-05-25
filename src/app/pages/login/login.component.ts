import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel = {
    userName: '',
    password: ''
  };
  showError = false;
  emailError = false;
  invalid = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.loginModel.userName === 'testuser@gmail.com'
      && this.loginModel.password === 'password') {
      this.router.navigate(['/home']);
    } else {
      if (this.loginModel.userName.length != 0 && this.loginModel.password.length != 0) {
        this.invalid = true;
      } else {
        if (this.loginModel.userName.length != 0) {
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          this.emailError = !re.test(this.loginModel.userName);
        } else {
          this.showError = true;
        }
      }
    }
  }
}
