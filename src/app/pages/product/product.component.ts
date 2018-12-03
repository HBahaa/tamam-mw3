import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage();
	}

	addProductToCart(){

	}

	incrementQuantity(){

	}
	decrementQuantity(){
		
	}
}
