import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

	title: string = "SEARCH FOR JOBS AS A FREELANCER";

	constructor() { }

	ngOnInit() {
	}

}