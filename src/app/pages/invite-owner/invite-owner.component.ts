import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-owner',
  templateUrl: './invite-owner.component.html',
  styleUrls: ['./invite-owner.component.scss']
})
export class InviteOwnerComponent implements OnInit {
	title: string = "INVITE A JOB OWNER TO TAMAM MARKETPLACE";

	constructor() { }

	ngOnInit() {
	}

}
