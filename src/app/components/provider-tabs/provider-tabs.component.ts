import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-provider-tabs',
  templateUrl: './provider-tabs.component.html',
  styleUrls: ['./provider-tabs.component.scss']
})
export class ProviderTabsComponent implements OnInit {

	@Input() activeTab;
	user_login: boolean = true;
	
	constructor() { }

	ngOnInit() {
	}

}
