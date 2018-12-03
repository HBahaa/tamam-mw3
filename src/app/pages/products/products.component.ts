import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	viewList: boolean = false;
	products: any[];

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage();
		this.products = [
			{id: 1, image: "http://placehold.it/400x250/000/fff", title: "Product1", description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,", price: "$21.000"},
			{id: 2, image: "http://placehold.it/400x250/000/fff", title: "Product2", description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,", price: "$11.000"},
			{id: 3, image: "http://placehold.it/400x250/000/fff", title: "Product2", description: "Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,", price: "$11.000"}
		]
	}

	changeViewToGrid(){
    	this.viewList = false; 	
	}
	changeViewToList(){
    	this.viewList = true;
	}
}