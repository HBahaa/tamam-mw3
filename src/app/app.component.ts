import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor() {}

    ngOnInit(){ }

 //  	setLanguage(){
	//     let lang = localStorage.getItem("language")
	//    if (lang == 'ar') {
	// 		$('html').attr('dir', 'rtl');
	// 		$('.navbar-nav').toggleClass('mr-auto');
	// 		$('.tab-body, .reset-password, .client-account, .list-group, .dropdown-menu, .tab-content').addClass("text-right");
	// 	}else{
	// 		$('html').attr('dir', 'ltr');
	// 		$('.navbar-nav').toggleClass('mr-auto');
	// 		$('.tab-body, .reset-password, .client-account, .list-group, .dropdown-menu, .tab-content').removeClass("text-right");
	// 	}
	// }

}
