import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseStudent } from '../course-student';
import { CourseStudentService } from '../course-student.service';
import { CourseTime } from '../course-time';
import { CourseService } from '../course.service';
import { Grade } from '../grade';
import { Weekday } from '../weekday';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  weekday: any = Weekday;
  coursetime: any = CourseTime;
  
  id!: number;
  course!: Course;
  courseStudents!: CourseStudent[];
  isDataAvailable: boolean = false;
  grade = Grade;

  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private courseStudentService: CourseStudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.getData().then(() =>
      this.isDataAvailable = true
    );

  }
  async getData() {
    this.course = await this.courseService.getCourseById(this.id);
    this.courseStudents = await this.courseService.getStudents(this.id);
  }

  async gradeCourse(courseId: number, studentId: number, grade: Grade) {
    await this.courseStudentService.gradeCourse(courseId, studentId, grade);
    this.getData();
  }

}
