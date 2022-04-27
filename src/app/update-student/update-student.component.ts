import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id!: number;
  student: Student = new Student();
  departments!: Department[];
  isDataAvailable: boolean = false;
  constructor(private studentService: StudentService,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.student);
    this.id = this.route.snapshot.params['id'];
    this.getData().then(() => {
      this.isDataAvailable = true
    });
    ;
  }

  onSubmit() {
    // console.log(this.student);
    this.updateStudent();
    
  }

  async getData() {
    this.student = await this.studentService.getStudentById(this.id);
    this.departments = await this.departmentService.getDepartmentList();
  }

  async updateStudent() {
    // console.log(this.student);
    this.student = await this.studentService.updateStudent(this.student);
    this.goToStudentList();
  }

  goToStudentList() {
    this.router.navigate(["/students"]);
  }
}
