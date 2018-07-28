import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ){}
	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}

}
