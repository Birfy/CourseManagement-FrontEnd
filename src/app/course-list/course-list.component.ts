import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses!: Course[];
  isDataAvailable: boolean = false;

  constructor(private courseService: CourseService,
    router: Router) { }

  

  ngOnInit(): void {
    this.getCourses().then(() => this.isDataAvailable = true);
  }

  async getCourses() {
    this.courses = await this.courseService.getCoursesList();
  }

  // updateStudent(id: number) {
  //   this.router.navigate(['/students/update', id])
  // }

  // viewStudentDetails(id: number) {
  //   this.router.navigate(['/students', id])
  // }

  // async deleteStudent(id: number) {
  //   await this.studentService.deleteStudent(id);
  // }

}
