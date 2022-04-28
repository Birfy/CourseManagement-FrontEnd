import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseURL = "http://localhost:8080/api/courses";
  
  constructor(private httpClient: HttpClient) { }

  async getCoursesList(): Promise<any>{
    return await this.httpClient.get<Course[]>(`${this.baseURL}`).toPromise();
  }

  async getCourseById(id: number): Promise<any> {
    return await this.httpClient.get<Course>(`${this.baseURL}/${id}`).toPromise();
  }

  async getStudents(id: number): Promise<any> {
    return await this.httpClient.get(`${this.baseURL}/${id}/students`).toPromise();
  }

  async createCourse(course: Course): Promise<any> {
    return await this.httpClient.post(`${this.baseURL}`, [course]).toPromise();
  }

  async updateCourse(course: Course): Promise<any> {
    return await this.httpClient.put(`${this.baseURL}/${course.id}`, course).toPromise();
  }
}
