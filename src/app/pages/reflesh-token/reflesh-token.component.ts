import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/service/authentication.service";

@Component({
  selector: 'app-reflesh-token',
  templateUrl: './reflesh-token.component.html',
  styleUrls: ['./reflesh-token.component.css']
})
export class RefleshTokenComponent implements OnInit {

  constructor(private authentication: AuthenticationService, ) { }

  ngOnInit() {
  }

  refleshToken() {
    this.authentication.refleshToken()
      .then(res => {
        console.log("ok");
      });
  }


}
