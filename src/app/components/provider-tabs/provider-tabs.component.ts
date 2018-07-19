import { Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-provider-tabs',
  templateUrl: './provider-tabs.component.html',
  styleUrls: ['./provider-tabs.component.scss']
})
export class ProviderTabsComponent implements OnInit {

	@Input() activeTab;
	isLoggedIn$: Observable<boolean>;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.isLoggedIn$ = this.authService.isLoggedIn;
	}

}
