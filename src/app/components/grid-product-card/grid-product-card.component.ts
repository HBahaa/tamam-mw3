import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-product-card',
  templateUrl: './grid-product-card.component.html',
  styleUrls: ['./grid-product-card.component.scss']
})
export class GridProductCardComponent implements OnInit {

	@Input() data: object;
	
	constructor() { }

	ngOnInit() {
	}

}
