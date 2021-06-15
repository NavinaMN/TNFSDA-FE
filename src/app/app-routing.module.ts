import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';
import { RegistrationComponent } from './registration/registration.component';
import { StationLoginComponent } from './station-login/station-login.component';
import { ThanipaniComponent } from './thanipani/thanipani.component';
import { TheevibathuComponent } from './theevibathu/theevibathu.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children: [
      {
        path:'',
        component: RegistrationComponent,
         pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'thanipani',
        component: ThanipaniComponent
      },
      {
        path: 'theevibathu',
        component: TheevibathuComponent
      },
       {
        path: 'stationlogin',
        component: StationLoginComponent
      },
      {
        path: 'Preview',
        component: PreviewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
