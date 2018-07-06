import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-search-tabs',
  templateUrl: './job-search-tabs.component.html',
  styleUrls: ['./job-search-tabs.component.scss']
})
export class JobSearchTabsComponent implements OnInit {

	@Input() activeTab;

	constructor() { }

	ngOnInit() {
	}

}
