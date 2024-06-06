import {inject, Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {MenuItem} from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  public menuItems: MenuItem[] = [];
  authService = inject(AuthService)

  setMenu() {
    if (!this.authService.currentUser()) {
      this.menuItems = [
        {
          label: "Login",
          routerLink: "login",
          icon: "pi pi-sign-in"
        },
        {
          label: "Register",
          routerLink: "register",
          icon: "pi pi-user-plus"
        },
      ]
    } else {
      this.menuItems = [
        {
          label: "Dashboard",
          routerLink: "",
          icon: "pi pi-home"
        },
      ]
    }
  }
}
