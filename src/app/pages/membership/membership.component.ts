import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
	data :any;

	constructor(private translate: TranslateService, private changeLnaguage: ChangeLanguageService) {
		this.translate.get('MEMBERSHIP.block1').subscribe((data)=>{
			this.data = data;
		});
	}

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}

}
