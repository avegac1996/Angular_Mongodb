import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// dasta

// Components
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'private',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];
// dasta




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
