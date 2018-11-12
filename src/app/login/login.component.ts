import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl('')
  });

  constructor(
    private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    const userData = this.loginForm.value;
    this.authenticationService.login(this.loginForm.controls['Username'].value, this.loginForm.controls['Password'].value)
      .subscribe(
        success => {
          this.router.navigate([this.authenticationService.redirectURL]);
        });
  }
}
