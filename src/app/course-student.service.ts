import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseStudent } from './course-student';
import { Grade } from './grade';

@Injectable({
  providedIn: 'root'
})
export class CourseStudentService {

  private baseURL = "http://localhost:8080/api/course_student"

  constructor(private httpClient: HttpClient) { }

  async enrollCourse(courseId: number, studentId: number): Promise<any> {
    return await this.httpClient.post<CourseStudent>(`${this.baseURL}/enroll/${courseId}/${studentId}`, null).toPromise();
}
  
  async dropCourse(courseId: number, studentId: number): Promise<any> {
      return await this.httpClient.put<CourseStudent>(`${this.baseURL}/drop/${courseId}/${studentId}`, null).toPromise();
  }

  async gradeCourse(courseId: number, studentId: number, grade: Grade): Promise<any> {
    return await this.httpClient.put<CourseStudent>(`${this.baseURL}/grade/${courseId}/${studentId}/${grade}`, null).toPromise();
}
}
