import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ProfileGroupComponent } from './profile-group/profile-group.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
      { path: '', redirectTo: 'child1', pathMatch: 'full' }, // Default child route
    ],
  },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'form', component: ProfileGroupComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'userPage/:id', component: UserComponent },
  { path: '**', component: Error404Component },
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  