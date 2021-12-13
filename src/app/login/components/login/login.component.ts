import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '@core/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth0: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.login();
  }

  login() {
    this.auth0.login()
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
