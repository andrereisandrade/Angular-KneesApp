import { User } from '../../../../models/user';
import { Component, OnInit } from '@angular/core';
import { Participant } from "app/models/participant";
import { AuthenticationService } from "app/service/authentication.service";
import { Advertiser } from 'app/models/advertiser.model';
import { AdvertiserService } from 'app/service/advertiserService';
import { AppSettings } from '../../../../config/appSettings';

@Component({
  selector: 'app-advertiser-profile',
  templateUrl: './advertiser-profile.component.html',
  styleUrls: ['./advertiser-profile.component.css']
})
export class AdvertiserProfileComponent implements OnInit {

  editMode: boolean = false;
  advertiser: Advertiser = new Advertiser();
  user;
  image;

  constructor(private auth: AuthenticationService, private advertiserService: AdvertiserService) { }

  getUser() {
    this.user = this.auth.getItemLocalStorage();
    this.advertiserService.getAdvertiserByEmail(this.user.email).subscribe((data) => {
      this.advertiser = data;
      if (this.user.facebookLogin) {
        this.advertiser.photo = this.user.photo;
      }
    });

  }

  ngOnInit() {
    this.getUser();
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.advertiser.photo = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
    this.image = event.srcElement.files[0];
  }

  saveImage() {
    if (this.image) {
      this.advertiserService.saveImage(this.image).subscribe(data => {
        console.log(data);
        this.editMode = false;
      })
    }
  }

  save() {

    if (this.image.name) {
      this.advertiser.photo = this.image.name;
    }
    this.advertiserService.saveForm(this.advertiser).subscribe(data => {
      this.saveImage();
      this.advertiser.photo = AppSettings.URL_BASE + "resources/img/events/" + this.advertiser.photo;
    });
  }

  setAddress(address: string) {
    this.advertiser.address = address;
  }

  setEditMode() {
    this.editMode = true;
  }
}
