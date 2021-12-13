import { Injectable } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private auth0: AuthService
  ) { }

  login() {
    return this.auth0.loginWithRedirect();
  }
  logout() {
    return this.auth0.logout();
  }
  getUserInfo() {
    return this.auth0.user$;
  }
  isAuthenticated() {
    return this.auth0.isAuthenticated$;
  }
}
