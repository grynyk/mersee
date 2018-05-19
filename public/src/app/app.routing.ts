import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
  { 
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});