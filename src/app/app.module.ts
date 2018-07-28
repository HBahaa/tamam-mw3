import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatNativeDateModule, MatDatepickerModule, MatPaginatorModule, MatProgressBarModule, MatSortModule, MatTableModule, MatInputModule, MatFormFieldModule,} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomHeaderComponent } from './components/bottom-header/bottom-header.component';
import { Home } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { FindJobComponent } from './pages/find-job/find-job.component';
import { SubmitJobComponent } from './pages/submit-job/submit-job.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HowCommunityWorkComponent } from './pages/how-community-work/how-community-work.component';
import { HowItWorkComponent } from './pages/how-it-work/how-it-work.component';
import { LoginComponent } from './pages/login/login.component';
import { JobSearchComponent } from './pages/job-search/job-search.component';
import { JobTabsComponent } from './components/job-tabs/job-tabs.component';
import { InviteOwnerComponent } from './pages/invite-owner/invite-owner.component';
import { ProviderSearchComponent } from './pages/provider-search/provider-search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProviderTabsComponent } from './components/provider-tabs/provider-tabs.component';
import { InviteFreelancerComponent } from './pages/invite-freelancer/invite-freelancer.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SelectUserTypeComponent } from './pages/select-user-type/select-user-type.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { ClientAccountComponent } from './pages/client-account/client-account.component';
import { CardComponent } from './components/card/card.component';
import { PlanComponent } from './pages/plan/plan.component';
import { JobWatchlistComponent } from './pages/job-watchlist/job-watchlist.component';
import { SpecialistWatchlistComponent } from './pages/specialist-watchlist/specialist-watchlist.component';
import { SubmitTicketComponent } from './pages/submit-ticket/submit-ticket.component';

import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { EditCustomerAccountComponent } from './pages/edit-customer-account/edit-customer-account.component';
import { CustomerAddressComponent } from './pages/customer-address/customer-address.component';

import { AuthService } from './services/auth/auth.service';
import { ChangeLanguageService } from './services/change-language/change-language.service';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HeaderComponent,
    BottomHeaderComponent,
    Home,
    FooterComponent,
    GroupsComponent,
    FindJobComponent,
    SubmitJobComponent,
    TabsComponent,
    HowCommunityWorkComponent,
    HowItWorkComponent,
    LoginComponent,
    JobSearchComponent,
    JobTabsComponent,
    InviteOwnerComponent,
    ProviderSearchComponent,
    ProfileComponent,
    ProviderTabsComponent,
    InviteFreelancerComponent,
    ForgetPasswordComponent,
    SelectUserTypeComponent,
    MembershipComponent,
    ClientAccountComponent,
    CardComponent,
    PlanComponent,
    JobWatchlistComponent,
    SpecialistWatchlistComponent,
    SubmitTicketComponent,
    ProjectDetailsComponent,
    EditCustomerAccountComponent,
    CustomerAddressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA8PSfgqsMQa5rFju5Fl3OfIXyyFEyVjMw'
    })
  ],
  providers: [
      AuthService,
      ChangeLanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
