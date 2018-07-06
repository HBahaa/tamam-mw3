import { Component, OnInit, Input } from '@angular/core';
import { MatStepperModule } from '@angular/material';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
	@Input() activeTab;

	constructor() { }

	ngOnInit() {
	}

}
