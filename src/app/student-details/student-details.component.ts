import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseStudent } from '../course-student';
import { CourseStudentService } from '../course-student.service';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id!: number;
  student!: Student;
  courseStudents!: CourseStudent[];
  isDataAvailable: boolean = false;
  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private courseStudentService: CourseStudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.getData().then(() =>
      this.isDataAvailable = true
    );

    

  }
  async getData() {
    this.student = await this.studentService.getStudentById(this.id);
    this.courseStudents = await this.studentService.getCourses(this.id);
  }

  async dropCourse(courseId: number, studentId: number) {
    await this.courseStudentService.dropCourse(courseId, studentId);
    this.getData();
  }


}
