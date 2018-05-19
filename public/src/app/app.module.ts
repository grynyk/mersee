import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { ApiService } from './services/api.service';
import { Http, HttpModule } from '@angular/http';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestDetailsComponent } from './components/request-details/request-details.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    RequestsComponent,
    RequestDetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatIconModule,
    ScrollDispatchModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
