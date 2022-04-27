import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: "students", component: StudentListComponent},
  {path: "students/create-student", component: CreateStudentComponent},
  {path: "students/update/:id", component: UpdateStudentComponent},
  {path: "students/:id", component: StudentDetailsComponent},
  {path: "courses", component: CourseListComponent}

  // {path: "", redirectTo: "students", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
