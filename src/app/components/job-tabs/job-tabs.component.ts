import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-job-tabs',
  templateUrl: './job-tabs.component.html',
  styleUrls: ['./job-tabs.component.scss']
})
export class JobTabsComponent implements OnInit {

	@Input() activeTab;
	date = new FormControl(new Date());
	
	constructor() { }

	ngOnInit() {
	}

}
