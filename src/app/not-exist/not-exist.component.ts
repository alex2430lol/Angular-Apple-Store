import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'not-exist',
    templateUrl: './not-exist.component.html',
    styleUrls: ['./not-exist.component.css']
})
export class NotExistComponent {
    constructor(
        private router: Router
    ) { }

    backToHome() {
        console.log('redireting to home...')
        this.router.navigate(['/'])
    }
}