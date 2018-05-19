import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './components/main/main.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestDetailsComponent } from './components/request-details/request-details.component';
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
  { 
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'profile', component: ProfileComponent },
      { path:':id',component: RequestDetailsComponent }
    ]
  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});