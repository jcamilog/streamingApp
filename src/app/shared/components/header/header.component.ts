import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '@core/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userInfo: any
  constructor(
    public auth0: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  logout(): void {
    this.auth0.logout()
  }
  getUserInfo() {
    this.auth0.getUserInfo()
    .subscribe( data => {
      this.userInfo = data;
      console.log(data);
    } )
  }

}
