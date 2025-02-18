import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';

export const routes: Routes = [
    {path:"" , component: HomeComponent},
    {path:"about" , component: AboutComponent},
    {path:"login" , component: LoginComponent},
    {path:"contact" , component: ContactComponent},
    {path:"learning" , component: LearningComponent},
    {path:"**" , component: Error404Component},

];
