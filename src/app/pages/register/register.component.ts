import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {Button} from "primeng/button";
import {UserInterface} from "../../models/user.interface";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'dummy-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    Button
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);
  http = inject(HttpClient)
  loginService = inject(LoginService)

  form = this.formBuilder.nonNullable.group({
    username: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
  })

  onSubmit(): void {
    console.log("submitting")
    this.http.post<{ user: UserInterface }>(environment.apiUrl + "/users", {
      user: this.form.getRawValue()
    }).subscribe((res) => {
      this.loginService.login(res.user);
    })
  }

}
