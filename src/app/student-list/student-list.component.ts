import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students!: Student[];
  isDataAvailable: boolean = false;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents().then(() => this.isDataAvailable = true);
  }

  async getStudents() {
    this.students = await this.studentService.getStudentsList();
  }

  updateStudent(id: number) {
    this.router.navigate(['/students/update', id])
  }

  viewStudentDetails(id: number) {
    this.router.navigate(['/students', id])
  }

  async deleteStudent(id: number) {
    await this.studentService.deleteStudent(id);
  }

  

}
