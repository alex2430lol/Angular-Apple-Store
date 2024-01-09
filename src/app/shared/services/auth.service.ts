import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn: boolean = false;

    login(username: string, password: string): boolean {
        // implement auth logic later
        // http call with backend and verify with DB

        this.isLoggedIn = username == 'alex' && password == 'ok123';

        return this.isLoggedIn;
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    isAuthenticated(): boolean {
        return this.isLoggedIn;
    }
}