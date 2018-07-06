import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
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

const routes: Routes = [
	{path:'login', component:LoginComponent },
	{path:'register', component:RegisterComponent },
	{path:'forget-password', component:ForgetPasswordComponent },
	{path:'profile', component:ProfileComponent },
	{path:'submit-job', component:SubmitJobComponent },
	{path:'find-job', component:FindJobComponent },
	{path:'job-search', component:JobSearchComponent },
	{path:'provider-search', component:ProviderSearchComponent },
	{path:'invite-freelancer', component:InviteFreelancerComponent },
	{path:'invite-owner', component:InviteOwnerComponent },
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
