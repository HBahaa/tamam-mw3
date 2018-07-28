import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html',
  styleUrls: ['./provider-search.component.scss']
})
export class ProviderSearchComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}
	

}
