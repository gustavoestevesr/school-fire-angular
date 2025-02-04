import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CreateTeacherComponent } from '../pages/create-teacher/create-teacher.component';
import { CreateStudentComponent } from '../pages/create-student/create-student.component';
import { LoginComponent } from '../pages/login/login.component';
import { TeacherComponent } from '../pages/teacher/teacher.component';
import { StudentComponent } from '../pages/student/student.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'teacher/:id',
    component: TeacherComponent
  },
  {
    path: 'create-teacher',
    component: CreateTeacherComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'create-student',
    component: CreateStudentComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
