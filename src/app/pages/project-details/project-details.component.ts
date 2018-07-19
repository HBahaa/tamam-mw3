import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

	lat: number = 30.678418;
	lng: number = 30.809007;

	constructor() {
	}

	ngOnInit() {
	}

}
