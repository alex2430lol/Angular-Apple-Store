import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(
        private authService: AuthService
    ) { }

    attemptLogin(username: string, password: string): boolean {
        return this.authService.login(username, password);
    }
}