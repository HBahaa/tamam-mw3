import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
	data :any;

	constructor(private translate: TranslateService) {
		this.translate.get('MEMBERSHIP.block1').subscribe((data)=>{
			this.data = data;
		});
	}

	ngOnInit() {
	}

}
