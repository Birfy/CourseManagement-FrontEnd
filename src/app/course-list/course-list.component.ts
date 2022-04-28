import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseTime } from '../course-time';
import { Weekday } from '../weekday';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses!: Course[];
  isDataAvailable: boolean = false;

  weekday: any = Weekday;
  coursetime: any = CourseTime;

  constructor(private courseService: CourseService,
    private router: Router) { }

  

  ngOnInit(): void {
    this.getCourses().then(() => this.isDataAvailable = true);
  }

  async getCourses() {
    this.courses = await this.courseService.getCoursesList();
  }

  updateCourse(id: number) {
    this.router.navigate(['/courses/update', id])
  }

  viewCourseDetails(id: number) {
    this.router.navigate(['/courses', id])
  }

  // async deleteStudent(id: number) {
  //   await this.studentService.deleteStudent(id);
  // }

}
