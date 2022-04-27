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
}
