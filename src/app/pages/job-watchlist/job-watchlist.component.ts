import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-job-watchlist',
  templateUrl: './job-watchlist.component.html',
  styleUrls: ['./job-watchlist.component.scss']
})
export class JobWatchlistComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}
	
}
