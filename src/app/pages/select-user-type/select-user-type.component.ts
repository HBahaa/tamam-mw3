import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-select-user-type',
  templateUrl: './select-user-type.component.html',
  styleUrls: ['./select-user-type.component.scss']
})
export class SelectUserTypeComponent implements OnInit {
	type: any;

	constructor(private router: Router, private changeLnaguage: ChangeLanguageService) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	}

	onFormSubmit(form: NgForm){

		this.type = form.controls['account_type'].value;

		if (this.type == 1) {
			this.router.navigateByUrl('/customer-account');
		}
		else if (this.type == 2){
			this.router.navigateByUrl('/membership');
		}
	}
}
