import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	form: FormGroup;
  	private formSubmitAttempt: boolean;

	constructor(
		private fb: FormBuilder,
    	private authService: AuthService,
    	private changeLnaguage: ChangeLanguageService
    ) { }

	ngOnInit() {
		this.changeLnaguage.checkLanguage()
	    this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
	    });
	}

	isFieldInvalid(field: string) {
	    return (
	    	(!this.form.get(field).valid && this.form.get(field).touched) ||
	    	(this.form.get(field).untouched && this.formSubmitAttempt)
	    );
	}


	onSubmit() {
	    if (this.form.valid) {
	      this.authService.login(this.form.value);
	    }
	    this.formSubmitAttempt = true;
	}

}
