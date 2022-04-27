import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseStudent } from './course-student';

@Injectable({
  providedIn: 'root'
})
export class CourseStudentService {

  private baseURL = "http://localhost:8080/api/course_student"

  constructor(private httpClient: HttpClient) { }

  
  async dropCourse(courseId: number, studentId: number): Promise<any> {
      return await this.httpClient.put<CourseStudent>(`${this.baseURL}/drop/${courseId}/${studentId}`, null).toPromise();
  }
}
