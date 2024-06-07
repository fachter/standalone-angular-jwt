import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenubarModule} from "primeng/menubar";
import {Button} from "primeng/button";
import {AuthService} from "./services/auth.service";
import {MenuService} from "./services/menu.service";
import {NgIf} from "@angular/common";
import {LogoutService} from "./services/logout.service";
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "./models/user.interface";
import {environment} from "../environments/environment";
import {LoginService} from "./services/login.service";

@Component({
  selector: 'dummy-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, Button, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'standalone-dummy-angular';
  menuService = inject(MenuService);
  authService = inject(AuthService);
  loginService = inject(LoginService);
  logoutService = inject(LogoutService);
  http = inject(HttpClient)

  ngOnInit(): void {
    console.log("Check called")
    this.initialLogin();
    this.menuService.setMenu()
  }

  private initialLogin() {
    if (!localStorage.getItem("token"))
      return;
    this.http.get<{ user: UserInterface }>(environment.apiUrl + "/user")
      .subscribe({
        next: (response) => {
          this.loginService.login(response.user);
        },
        error: () => {
          this.logoutService.logout();
        }
      })
  }

  logout() {
    this.logoutService.logout();
  }
}
