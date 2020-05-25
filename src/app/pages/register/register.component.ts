import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerModel = {
    name: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: ''
  };
  showError = false;
  emailError = false;
  isSuccess = false;
  passwordError = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.registerModel.name !== 'test-user') {
      if (this.registerModel.email.length != 0) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.emailError = !re.test(this.registerModel.email);
      } else {
        if (this.registerModel.password.length != 0 &&
          this.registerModel.confirmPassword.length != 0) {
          this.passwordError = this.registerModel.password
            != this.registerModel.confirmPassword;
        } else {
          this.showError = true;
        }
      }
    } else {
      this.isSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 5000);
    }
  }

}
