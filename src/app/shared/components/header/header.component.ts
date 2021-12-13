import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '@core/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth0: AuthServiceService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth0.logout()
  }

}
