import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorPaginaComponent } from './error/error-pagina/error-pagina.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},//
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "register", component: RegisterComponent, pathMatch:"full"},
  {path: "home", component: HomeComponent, pathMatch: "full"},
  {path: "**", component: ErrorPaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
