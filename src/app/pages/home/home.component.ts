import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class Home implements OnInit {

  constructor( private changeLnaguage: ChangeLanguageService ) { }

  ngOnInit() {
    this.changeLnaguage.checkLanguage();
  }


}
