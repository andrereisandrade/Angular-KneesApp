import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { LoginOptions, FacebookService } from "ngx-facebook/dist/esm";

@Injectable()
export class FBService {

  private loginOptions: LoginOptions = {
    enable_profile_selector: true,
    return_scopes: true,
    scope: 'public_profile, user_friends, email,pages_show_list, user_photos, user_about_me'
  };

  constructor(
    private facebook: FacebookService,
    private http: Http) {
    this.initFacebook();
  }

  initFacebook() {
    this.facebook.init({
      appId: '1278634712205990',
      version: 'v2.9'
    });
  }

  facebookLogin() {
    return this.facebook.login(this.loginOptions)
  }

  getUser() {
    return this.facebook.api('/me?fields=name,email,birthday');
  }
}
