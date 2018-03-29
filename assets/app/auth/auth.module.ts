import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class AuthModule {

}