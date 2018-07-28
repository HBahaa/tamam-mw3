import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}


}
