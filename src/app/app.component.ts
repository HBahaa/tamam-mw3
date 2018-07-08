import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(translate: TranslateService) {

        translate.setDefaultLang('en');
        translate.use('en');
    }
  	title = 'app';


  	setLanguage(){
	    let lang = localStorage.getItem("language")
	    if (lang == 'ar') {
			$('html').attr('dir', 'rtl');
			$('.navbar-nav').toggleClass('mr-auto');
			$('.tab-body').addClass("text-right");
		}else{
			$('html').attr('dir', 'ltr');
			$('.navbar-nav').toggleClass('mr-auto');
			$('.tab-body').removeClass("text-right");
		}
	}

}
