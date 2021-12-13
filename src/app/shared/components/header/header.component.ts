import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthServiceService } from '@core/auth-service.service';

import { UserInformation } from '@models/users/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userInfo: UserInformation | null = null;
  constructor(
    public auth0: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  logout(): void {
    this.auth0.logout();
    this.router.navigate(['/login']);
  };
  getUserInfo() {
    this.auth0.getUserInfo()
    .subscribe( (data: any) => {
      this.userInfo = data;
    }, err => {
      console.log(err);
    } )
  };

}
