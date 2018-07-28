import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ChangeLanguageService } from '../../services/change-language/change-language.service';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.scss']
})
export class SubmitTicketComponent implements OnInit {

	displayedColumns: string[] = ['id', 'department', 'title', 'replies', 'status'];
	dataSource = new MatTableDataSource<ticket>(ELEMENT_DATA);

	constructor( private changeLnaguage: ChangeLanguageService ) { }

	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.changeLnaguage.checkLanguage();
		this.dataSource.paginator = this.paginator;
	}



}

export interface ticket {
  id: number;
  department: string;
  title: string;
  replies: number;
  status: string;
}

const ELEMENT_DATA: ticket[] = [
	{id: 1,department: 'Customer Care', title: 'test', replies: 0, status: 'Open'},
	{id: 2,department: 'Customer Care', title: 'test', replies: 2, status: 'Open'},
	{id: 3,department: 'Customer Care', title: 'test', replies: 0, status: 'Open'},
	{id: 4,department: 'Customer Care', title: 'test', replies: 1, status: 'Open'}
]
;
