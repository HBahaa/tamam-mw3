import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	lang: any;

	constructor(private translate: TranslateService) {}

	ngOnInit() {
		// this.lang = localStorage.getItem("language");
		// 	console.log("lang", this.lang)
		// if (this.lang) {
		// 	console.log("ghag", this.lang)
		// 	this.changeLanguage(this.lang);
		// }else{
		// 	this.changeLanguage('en');
		// }
	}

	changeLanguage(lang){
		this.translate.use(lang);
		localStorage.setItem("language", lang)
		if (lang == 'ar') {
			$('html').attr('dir', 'rtl');
			$('.navbar-nav').removeClass('mr-auto');
			$('.navbar-right').addClass('mr-auto');
			$('.tab-body, .reset-password, .client-account, .list-group, .dropdown-menu, .tab-content').addClass("text-right");
			$('.item-img').removeClass('float-left');
		}else{
			$('html').attr('dir', 'ltr');
			$('.navbar-nav').addClass('mr-auto');
			$('.navbar-right').removeClass('mr-auto');
			$('.tab-body, .reset-password, .client-account, .list-group, .dropdown-menu, .tab-content').removeClass("text-right");
			$('.item-img').addClass('float-left');
		}
	}
}
