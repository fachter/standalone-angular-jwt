import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenubarModule} from "primeng/menubar";
import {Button} from "primeng/button";
import {AuthService} from "./services/auth.service";
import {MenuService} from "./services/menu.service";
import {NgIf} from "@angular/common";
import {LogoutService} from "./services/logout.service";

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
  logoutService = inject(LogoutService);

  ngOnInit(): void {
    console.log("Check called")
    this.menuService.setMenu()
  }

  logout() {
    this.logoutService.logout();
  }
}
