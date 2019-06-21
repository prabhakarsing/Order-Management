import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from '../gaurds/auth.guard';


export const HomeRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'report', component: ReportComponent}]
   }];
