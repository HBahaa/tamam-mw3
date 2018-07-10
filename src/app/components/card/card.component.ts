import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() data;
	@Input() list: any;
	// @Input() subtitle: string;

	constructor() { }

	ngOnInit() {
		console.log("dta",this.data)
	}

}
