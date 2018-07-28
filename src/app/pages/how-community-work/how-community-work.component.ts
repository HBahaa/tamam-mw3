import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-how-community-work',
  templateUrl: './how-community-work.component.html',
  styleUrls: ['./how-community-work.component.scss']
})
export class HowCommunityWorkComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}

}
