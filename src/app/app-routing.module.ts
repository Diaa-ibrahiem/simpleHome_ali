import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { homeGurad } from './components/home.guard';
const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: '', component: LoginComponent,
      },
      {
        path: 'home', component: HomeComponent, canActivate: [homeGurad]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
