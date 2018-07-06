import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html',
  styleUrls: ['./provider-search.component.scss']
})
export class ProviderSearchComponent implements OnInit {

	title: string = "SEARCH FOR JOBS AS A SERVICE PROVIDER AT TAMAM'S MARKETPLACE";

	constructor() { }

	ngOnInit() {
	}

}
