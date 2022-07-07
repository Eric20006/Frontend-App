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
import { OverviewCardComponent } from './_routes/lists/templates/overview-card/overview-card.component';
import { AddTaskComponent } from './_routes/lists/templates/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { ListsComponent } from './_routes/lists/lists.component';
import { SortSliderComponent } from './_routes/lists/templates/sort-slider/sort-slider.component';
import { DetailedCardComponent } from './_routes/lists/templates/detailed-card/detailed-card.component';
import { NoTasksComponent } from './_routes/lists/templates/no-tasks/no-tasks.component';
import { DeletingReturnComponent } from './_routes/lists/templates//deleting-return/deleting-return.component';
import { TextComponent } from './_routes/text/text.component';
import { LoginComponent } from './_routes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SideListComponent,
    ErrorComponent,
    OverviewComponent,
    OverviewCardComponent,
    AddTaskComponent,
    ListsComponent,
    SortSliderComponent,
    DetailedCardComponent,
    NoTasksComponent,
    DeletingReturnComponent,
    TextComponent,
    LoginComponent,
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
