import { Routes } from '@angular/router';
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [

  {path: "login", loadComponent: () => import("./pages/login/login.component").then(mod => mod.LoginComponent)},
  {path: "register", loadComponent: () => import("./pages/register/register.component").then(mod => mod.RegisterComponent)},
  {
    path: "",
    loadComponent: () => import("./pages/dashboard/dashboard.component").then(mod => mod.DashboardComponent),
    canActivate: [authGuard]
  },

];
