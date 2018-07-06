import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
import { RegisterComponent } from './pages/register/register.component';
import { JobSearchComponent } from './pages/job-search/job-search.component';
import { JobTabsComponent } from './components/job-tabs/job-tabs.component';
import { InviteOwnerComponent } from './pages/invite-owner/invite-owner.component';
import { ProviderSearchComponent } from './pages/provider-search/provider-search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProviderTabsComponent } from './components/provider-tabs/provider-tabs.component';
import { InviteFreelancerComponent } from './pages/invite-freelancer/invite-freelancer.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

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
    RegisterComponent,
    JobSearchComponent,
    JobTabsComponent,
    InviteOwnerComponent,
    ProviderSearchComponent,
    ProfileComponent,
    ProviderTabsComponent,
    InviteFreelancerComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
