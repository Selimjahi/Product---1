import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'signin',
        component:SigninComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'reset-password',
        component:ResetPasswordComponent
    }

];
