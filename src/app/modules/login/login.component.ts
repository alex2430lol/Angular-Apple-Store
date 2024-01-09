import { Component } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/shared/services/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    showLoginBox: boolean = true;
    userName: string = '';
    password: string = '';
    showPassword: boolean = false;
    confirmPassword: string = '';
    isRememberMeChecked: boolean = false;

    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    emailOrPhoneNumberValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;

            // Check if the value is a valid email or phone number (customize the regex accordingly)
            const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
                /^[0-9]{10}$/.test(value);

            return isValid ? null : { invalidEmailOrPhoneNumber: true };
        };
    }

    toggleShowPassword(): void {
        this.showPassword = !this.showPassword;
    }

    onLoginClicked(): void {
        if (this.loginService.attemptLogin(this.userName, this.password)) {
            this.router.navigate(['/Customers']);
        } else {
            alert('Invalid creadentials');
        }
    }

    onCreateYoursClicked() {
        this.showLoginBox = !this.showLoginBox;
    }


    submitForm(): void {
        // Handle form submission logic (e.g., send data to backend)
        console.log('Form submitted');
    }
}