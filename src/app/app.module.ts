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
import { HomeworkComponent } from './_routes/homework/homework.component';
import { OverviewCardComponent } from './_general-templates/overview-card/overview-card.component';
import { AddTaskComponent } from './_general-templates/add-task/add-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SideListComponent,
    ErrorComponent,
    OverviewComponent,
    HomeworkComponent,
    OverviewCardComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
