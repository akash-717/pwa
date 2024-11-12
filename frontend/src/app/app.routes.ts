import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { SignupComponent } from './pages/signup/signup.component';
import {QuizComponent} from './pages/quiz/quiz.component'
import { authGuard } from './auth/auth.guard';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'signup',
        component:SignupComponent,
    },
    {
        path:'quiz',
        component:QuizComponent,
    },
    {
        path:'user',
        component:UserComponent,
        canActivate: [authGuard]
    },

];
