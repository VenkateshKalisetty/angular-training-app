import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { BasicFormsComponent } from './basic-forms/basic-forms.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'custompipes', component: CustomPipesComponent },
  { path: 'basicforms', component: BasicFormsComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
