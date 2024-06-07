import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  let currentUser = authService.currentUser();
  if (!currentUser) {
    router.navigate(["/login"]).then();
    return false;
  }
  return true;
};
