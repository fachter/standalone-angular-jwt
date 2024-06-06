import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'dummy-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
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
          routerLink: "login"
        },
        {
          label: "Register",
          routerLink: "register"
        },
        {
          label: "Dashboard",
          routerLink: "dashboard"
        }
      ]
  }

}
