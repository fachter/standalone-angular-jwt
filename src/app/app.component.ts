import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {Button} from "primeng/button";

@Component({
  selector: 'dummy-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'standalone-dummy-angular';
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
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
        {
          label: "Dashboard",
          routerLink: "dashboard",
          icon: "pi pi-home"
        },
      ]
  }

  logout() {
    console.log("Logout")
  }
}
