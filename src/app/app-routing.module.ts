import { LoginComponent } from './_routes/login/login.component';
import { TextComponent } from './_routes/text/text.component';
import { ListsComponent } from './_routes/lists/lists.component';
import { OverviewComponent } from './_routes/overview/overview.component';
import { ErrorComponent } from './_routes/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'notentabelle', component: ErrorComponent}, //TODO:
  {path: 'hausaufgaben', component: ListsComponent},
  {path: 'terminliste', component: ListsComponent},
  {path: 'pruefungen', component: ListsComponent},
  {path: 'gemischte_liste', component: ListsComponent},
  {path: 'kalender', component: ErrorComponent},
  {path: 'ueber_uns', component: TextComponent},
  {path: 'datenschutz', component: TextComponent},
  {path: 'login', component: LoginComponent},

  //ErrorMsgs + Wildcard
  {path: '404', component: ErrorComponent},
  {path: 'logout', component: ErrorComponent},
  {path: 'test', component: ErrorComponent},
  {path: '**', redirectTo: '/404'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
