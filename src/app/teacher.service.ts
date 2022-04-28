import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseURL = "http://localhost:8080/api/teachers";
  
    constructor(private httpClient: HttpClient) {
    }

    async getTeacherList(): Promise<any> {
        return await this.httpClient.get<Teacher[]>(`${this.baseURL}`).toPromise();
    }
}
