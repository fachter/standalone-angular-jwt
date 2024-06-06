import { Routes } from '@angular/router';

export const routes: Routes = [

  {path: "login", loadComponent: () => import("./pages/login/login.component").then(mod => mod.LoginComponent)},
  {path: "register", loadComponent: () => import("./pages/register/register.component").then(mod => mod.RegisterComponent)},
  {path: "dashboard", loadComponent: () => import("./pages/dashboard/dashboard.component").then(mod => mod.DashboardComponent)},

];
