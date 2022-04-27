import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:8080/api/students";
  
  constructor(private httpClient: HttpClient) {

  }

  async getStudentsList(): Promise<any>{
    return await this.httpClient.get<Student[]>(`${this.baseURL}`).toPromise();
  }

  async createStudent(student: Student): Promise<any> {
    return await this.httpClient.post(`${this.baseURL}`, [student]).toPromise();
  }

  async updateStudent(student: Student): Promise<any> {
    return await this.httpClient.put(`${this.baseURL}/${student.id}`, student).toPromise();
  }

  async getStudentById(id: number): Promise<any> {
    return await this.httpClient.get<Student>(`${this.baseURL}/${id}`).toPromise();
  }

  async deleteStudent(id: number): Promise<any> {
    return await this.httpClient.delete(`${this.baseURL}/${id}`).toPromise();
  }

  async getCourses(id: number): Promise<any> {
    return await this.httpClient.get(`${this.baseURL}/${id}/courses`).toPromise();
  }

  // assignDepartment(id: number, departmentId: number): Observable<Student> {
  //   return this.httpClient.put<Student>(`${this.baseURL}/${id}/departmnet/${departmentId}`, null);
  // }
}

