import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-edit-customer-account',
  templateUrl: './edit-customer-account.component.html',
  styleUrls: ['./edit-customer-account.component.scss']
})
export class EditCustomerAccountComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}

}
