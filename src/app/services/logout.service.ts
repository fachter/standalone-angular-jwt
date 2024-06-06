import {inject, Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {MenuService} from "./menu.service";

@Injectable({
  providedIn: "root"
})
export class LogoutService {
  authService = inject(AuthService)
  menuService = inject(MenuService)

  logout() {
    this.authService.currentUser.set(null);
    this.menuService.setMenu();
  }
}
