import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { SubmitJobComponent } from './pages/submit-job/submit-job.component';
import { FindJobComponent } from './pages/find-job/find-job.component';
import { InviteOwnerComponent } from './pages/invite-owner/invite-owner.component';
import { InviteFreelancerComponent } from './pages/invite-freelancer/invite-freelancer.component';
import { JobSearchComponent } from './pages/job-search/job-search.component';
import { ProviderSearchComponent } from './pages/provider-search/provider-search.component';
import { HowItWorkComponent } from './pages/how-it-work/how-it-work.component';
import { HowCommunityWorkComponent } from './pages/how-community-work/how-community-work.component';
import { SelectUserTypeComponent } from './pages/select-user-type/select-user-type.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { ClientAccountComponent } from './pages/client-account/client-account.component';
import { PlanComponent } from './pages/plan/plan.component';
import { JobWatchlistComponent } from './pages/job-watchlist/job-watchlist.component';
import { SpecialistWatchlistComponent } from './pages/specialist-watchlist/specialist-watchlist.component';
import { SubmitTicketComponent } from './pages/submit-ticket/submit-ticket.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { EditCustomerAccountComponent } from './pages/edit-customer-account/edit-customer-account.component';


const routes: Routes = [
	{path:'login', component:LoginComponent },
	{path:'forget-password', component:ForgetPasswordComponent },
	{path:'select-user-type', component:SelectUserTypeComponent },
	{path:'edit-customer-account/:id', component:EditCustomerAccountComponent },
	{path:'customer-account', component:ClientAccountComponent },
	{path:'membership/plan', component:PlanComponent },
	{path:'membership', component:MembershipComponent },
	{path:'profile', component:ProfileComponent },
	{path:'project-details', component:ProjectDetailsComponent },
	{path:'submit-job', component:SubmitJobComponent },
	{path:'find-job', component:FindJobComponent },
	{path:'job-search', component:JobSearchComponent },
	{path:'job-watchlist', component:JobWatchlistComponent },
	{path:'provider-search', component:ProviderSearchComponent },
	{path:'specialist-watchlist', component:SpecialistWatchlistComponent },
	{path:'invite-freelancer', component:InviteFreelancerComponent },
	{path:'invite-owner', component:InviteOwnerComponent },
	{path:'submit-ticket', component:SubmitTicketComponent },
	{path:'groups', component:GroupsComponent },
	{path:'how-it-work', component:HowItWorkComponent },
	{path:'how-does-a-public-community-work', component:HowCommunityWorkComponent },
	{path:'', component:Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
