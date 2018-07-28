import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {

	constructor(private translate: TranslateService) {}

	checkLanguage(){
		let lang = localStorage.getItem("language");
		if (lang) {
			this.translate.use(lang);
			if (lang == 'ar') {
				$('html').attr('dir', 'rtl');
				$('body').addClass('text-right');
				$('.navbar-nav').toggleClass('mr-auto');
			}else{
				$('html').attr('dir', 'ltr');
				$('body').removeClass('text-right');
				$('.navbar-nav').toggleClass('mr-auto');
			}
		}
		else{
			this.translate.setDefaultLang('en');
        	this.translate.use('en');
		}
	}
}
