import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  departments!: Department[];
  isDataAvailable = false;

  constructor(private studentService: StudentService,
    private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDepartmentList().then(() => this.isDataAvailable = true);
  }

  onSubmit() {
    this.saveStudent();
    
  }

  async saveStudent() {
    this.student = await this.studentService.createStudent(this.student);
    this.goToStudentList();
  }

  goToStudentList() {
    this.router.navigate(["/students"]);
  }

  async getDepartmentList() {
    this.departments = await this.departmentService.getDepartmentList();
  }

}
