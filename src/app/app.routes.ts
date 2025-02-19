import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ProfileGroupComponent } from './profile-group/profile-group.component';

export const routes: Routes = [
    {path:"" , component: HomeComponent},
    {path:"about" , component: AboutComponent},
    {path:"login" , component: LoginComponent},
    {path:"contact" , component: ContactComponent},
    {path:"learning" , component: LearningComponent},
    {path:"form" , component: ProfileGroupComponent},
    {path:"profile" , component: ProfileComponent},
    {path:"userPage/:id" , component: UserComponent},
    {path:"**" , component: Error404Component},

];
