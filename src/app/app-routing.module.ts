import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { SelectCourseComponent } from './select-course/select-course.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: "students", component: StudentListComponent},
  {path: "students/create-student", component: CreateStudentComponent},
  {path: "students/:id/select-course", component: SelectCourseComponent},
  {path: "students/update/:id", component: UpdateStudentComponent},
  {path: "students/:id", component: StudentDetailsComponent},
  {path: "courses", component: CourseListComponent},
  {path: "courses/create-course", component: CreateCourseComponent},
  {path: "courses/update/:id", component: UpdateCourseComponent},
  {path: "courses/:id", component: CourseDetailsComponent},

  // {path: "", redirectTo: "students", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
