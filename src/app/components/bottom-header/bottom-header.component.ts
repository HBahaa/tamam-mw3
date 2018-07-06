import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent implements OnInit {

	@Input() title: string;
	date = moment().format('dddd, MMMM D, YYYY');
	constructor() { }

	ngOnInit() {
	}

}
