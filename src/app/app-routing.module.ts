import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentsAllComponent } from './tournaments-all/tournaments-all.component';
import { TournamentsCreateComponent } from './tournaments-create/tournaments-create.component';
import { TournamentsManageComponent } from './tournaments-manage/tournaments-manage.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TournamentsOneComponent } from './tournaments-one/tournaments-one.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './logout/auth-gaurd.service';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tournaments/all', component: TournamentsAllComponent},
  {path: 'tournaments/create', component: TournamentsCreateComponent},
  {path: 'tournaments/manage', component: TournamentsManageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'tournament/:id', component: TournamentsOneComponent},
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
