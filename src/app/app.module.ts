import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpecialCharactersPipe } from './custom-pipes/special-characters.pipe';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { CountryFlagComponent } from './country-flag/country-flag.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    CountryFlagComponent,
    SpecialCharactersPipe,
    DashboardComponent,
    CustomPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
