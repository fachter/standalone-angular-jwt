import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {UserInterface} from "../../models/user.interface";
import {environment} from "../../../environments/environment";
import {FloatLabelModule} from "primeng/floatlabel";
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'dummy-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FloatLabelModule,
    Button,
    InputTextModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  http = inject(HttpClient)
  loginService = inject(LoginService)

  form = this.formBuilder.nonNullable.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  })

  onSubmit(): void {
    console.log("logging in")
    this.http.post<{ user: UserInterface }>(environment.apiUrl + "/users/login", {
      user: this.form.getRawValue()
    }).subscribe((res) => {
      this.loginService.login(res.user);
    })
  }
}
