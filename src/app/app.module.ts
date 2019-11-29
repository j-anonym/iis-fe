import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatInputModule,
         MatDatepickerModule, MatNativeDateModule, MatSelectModule, MAT_DIALOG_DEFAULT_OPTIONS, MatTableModule, MatTabsModule, MatPaginatorModule, MatExpansionModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { Globals } from './globals';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent} from "./success/success.component";
import { RegisterComponent } from './register/register.component';
import { TournamentsAllComponent } from './tournaments-all/tournaments-all.component';
import { TournamentsCreateComponent } from './tournaments-create/tournaments-create.component';
import { TournamentsManageComponent } from './tournaments-manage/tournaments-manage.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentsCreateDialogComponent } from './tournaments-create-dialog/tournaments-create-dialog.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminPageDialogComponent } from './admin-page-dialog/admin-page-dialog.component';
import { TournamentsManageDialogComponent } from './tournaments-manage-dialog/tournaments-manage-dialog.component';
import { TournamentsOneComponent } from './tournaments-one/tournaments-one.component';
import { LogoutComponent } from './logout/logout.component';
import {BasicAuthHtppInterceptorService} from "./login/auth-http.service";
import {ErrorInterceptor} from "./logout/error.intercept";
import { AdminPageEditDialogComponent } from './admin-page-edit-dialog/admin-page-edit-dialog.component';
import { TournamentsAllDialogComponent } from './tournaments-all-dialog/tournaments-all-dialog.component';
import { TournamentsOneDialogComponent } from './tournaments-one-dialog/tournaments-one-dialog.component';
import { TeamsAllComponent } from './teams-all/teams-all.component';
import { TeamsCreateComponent } from './teams-create/teams-create.component';
import { TeamsManageComponent } from './teams-manage/teams-manage.component';
import { TeamsOneComponent } from './teams-one/teams-one.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    TournamentsAllComponent,
    TournamentsCreateComponent,
    TournamentsManageComponent,
    AdminPageComponent,
    AdminPageDialogComponent,
    TournamentsCreateDialogComponent,
    TournamentsManageDialogComponent,
    TournamentsOneComponent,
    SuccessComponent,
    AdminPageEditDialogComponent,
    TournamentsAllDialogComponent,
    TournamentsOneDialogComponent,
    TeamsAllComponent,
    TeamsCreateComponent,
    TeamsManageComponent,
    TeamsOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  entryComponents: [
    AdminPageDialogComponent,
    AdminPageEditDialogComponent,
    TournamentsCreateDialogComponent,
    TournamentsManageDialogComponent,
    TournamentsAllDialogComponent,
    TournamentsOneDialogComponent
  ],
  providers: [
      Globals,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    MatDatepickerModule,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
