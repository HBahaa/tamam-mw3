import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	isLoggedIn$: Observable<boolean>;

	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit() {
		this.isLoggedIn$ = this.authService.isLoggedIn;
		// this.authService.isLoggedIn.subscribe((isLoggedIn:boolean)=>{
		// 	if (!isLoggedIn) {
		// 		this.router.navigate(['/']);
		// 	}
		// })
	}

	onLogout() {
	    this.authService.logout();
	}
	
}
