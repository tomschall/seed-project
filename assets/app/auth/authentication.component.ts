import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AuthenticationComponent {
    constructor(public auth: AuthService) {}

    isLoggedIn() {
        return this.auth.isLoggedIn();
    }
}