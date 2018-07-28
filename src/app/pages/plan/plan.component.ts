import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

	constructor( private changeLnaguage: ChangeLanguageService ) { }

  ngOnInit() {
    this.changeLnaguage.checkLanguage()
  }

}
