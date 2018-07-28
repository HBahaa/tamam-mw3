import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-invite-owner',
  templateUrl: './invite-owner.component.html',
  styleUrls: ['./invite-owner.component.scss']
})
export class InviteOwnerComponent implements OnInit {
	
	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
	this.changeLnaguage.checkLanguage()
	}


}
