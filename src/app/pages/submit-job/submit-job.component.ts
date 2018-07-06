import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-job',
  templateUrl: './submit-job.component.html',
  styleUrls: ['./submit-job.component.scss']
})
export class SubmitJobComponent implements OnInit {

	title: string = "HOW TO SUBMIT A JOB AS A FREELANCER";

	constructor() { }

	ngOnInit() {
	}

}
