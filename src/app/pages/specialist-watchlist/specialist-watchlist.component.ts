import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-specialist-watchlist',
  templateUrl: './specialist-watchlist.component.html',
  styleUrls: ['./specialist-watchlist.component.scss']
})
export class SpecialistWatchlistComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}
}
