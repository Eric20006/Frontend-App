import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { BackgroundComponent } from './_general-templates/background/background.component';
import { SideListComponent } from './_general-templates/side-list/side-list.component';
import { ErrorComponent } from './_routes/error/error.component';
import { OverviewComponent } from './_routes/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SideListComponent,
    ErrorComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
