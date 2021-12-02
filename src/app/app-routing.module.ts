import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { CreateJobComponent } from './features/jobs/components/create-job/create-job.component';
import { JobsComponent } from './features/jobs/pages/jobs/jobs.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { SignUpComponent } from './features/sign-up/pages/sign-up/sign-up.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'jobs', component: JobsComponent, canActivate: [AuthGuard] },
  { path: 'createJob', component: CreateJobComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
