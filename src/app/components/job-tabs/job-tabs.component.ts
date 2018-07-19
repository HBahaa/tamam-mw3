import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable} from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-job-tabs',
  templateUrl: './job-tabs.component.html',
  styleUrls: ['./job-tabs.component.scss']
})
export class JobTabsComponent implements OnInit {

	@Input() activeTab;
	date = new FormControl(new Date());
	isLoggedIn$: Observable<boolean>;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.isLoggedIn$ = this.authService.isLoggedIn;
	}

}
