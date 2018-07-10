import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(private translate: TranslateService) { }

	ngOnInit() {
	}

	changeLanguage(lang){
		this.translate.use(lang);
		localStorage.setItem("language", lang)
		if (lang == 'ar') {
			$('html').attr('dir', 'rtl');
			$('.navbar-nav').toggleClass('mr-auto');
			$('.tab-body, .reset-password, .client-account, .list-group, .dropdown-menu').addClass("text-right");
		}else{
			$('html').attr('dir', 'ltr');
			$('.navbar-nav').toggleClass('mr-auto');
			$('.tab-body, .reset-password, .client-account, .list-group, .dropdown-menu').removeClass("text-right");
		}
	}
}
