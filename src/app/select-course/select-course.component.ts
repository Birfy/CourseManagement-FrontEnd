import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseStudentService } from '../course-student.service';
import { CourseTime } from '../course-time';
import { StudentService } from '../student.service';
import { Weekday } from '../weekday';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css']
})
export class SelectCourseComponent implements OnInit {
  id!: number;
  courses!: Course[];
  isDataAvailable: boolean = false;

  weekday: any = Weekday;
  coursetime: any = CourseTime;

  constructor(private studentService: StudentService,
    private courseStudentService: CourseStudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.getData().then(() =>
      this.isDataAvailable = true
    );
  }

  async getData() {
    this.courses = await this.studentService.getAvailableCourses(this.id);
  }

  viewCourseDetails(id: number) {
    this.router.navigate(['/courses', id])
  }

  viewStudentDetails(id: number) {
    this.router.navigate(['/students', id])
  }

  selectCourse(id: number) {
    this.courseStudentService.enrollCourse(id, this.id);
    this.viewStudentDetails(this.id);
  }

}
