import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentsAllComponent } from './tournaments-all/tournaments-all.component';
import { TournamentsCreateComponent } from './tournaments-create/tournaments-create.component';
import { TournamentsManageComponent } from './tournaments-manage/tournaments-manage.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TournamentsOneComponent } from './tournaments-one/tournaments-one.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './logout/auth-gaurd.service';
import { SuccessComponent} from './success/success.component';
import { TeamsAllComponent } from './teams-all/teams-all.component';
import { TeamsCreateComponent } from './teams-create/teams-create.component';
import { TeamsManageComponent } from './teams-manage/teams-manage.component';
import { TeamsOneComponent } from './teams-one/teams-one.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {path: 'statistics', component: StatisticsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tournaments/all', component: TournamentsAllComponent},
  {path: 'tournaments/create', component: TournamentsCreateComponent},
  {path: 'tournaments/involved', component: TournamentsManageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'tournament/:id', component: TournamentsOneComponent},
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'register', component: RegisterComponent },
  {path: 'success', component: SuccessComponent},
  {path: 'teams/all', component: TeamsAllComponent},
  {path: 'teams/create', component: TeamsCreateComponent},
  {path: 'teams/involved', component: TeamsManageComponent},
  {path: 'team/:id', component: TeamsOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
