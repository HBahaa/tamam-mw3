import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-invite-freelancer',
  templateUrl: './invite-freelancer.component.html',
  styleUrls: ['./invite-freelancer.component.scss']
})
export class InviteFreelancerComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}

}
