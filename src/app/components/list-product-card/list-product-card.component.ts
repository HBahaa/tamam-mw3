import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-product-card',
  templateUrl: './list-product-card.component.html',
  styleUrls: ['./list-product-card.component.scss']
})
export class ListProductCardComponent implements OnInit {

	@Input() data: object;
	
	constructor() { }

	ngOnInit() {
	}

}
