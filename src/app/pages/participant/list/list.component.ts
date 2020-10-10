import { Component, OnInit } from '@angular/core';
import { Participant } from "app/models/participant";
import { ParticipantService } from "app/service/participant.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private participants: Participant[] = [];
  
  
    constructor(private ParticipantService: ParticipantService) {
  
    }
    deleteParticipant(id) {
      this.ParticipantService.deleteUser(id).subscribe(null,
        err => {
          this.getParticipants();
        });
    }
  
    getParticipants() {
      this.ParticipantService.getParticipants().subscribe(data => this.participants = data);
    }
  
    ngOnInit() {
      this.getParticipants();
    }
}
