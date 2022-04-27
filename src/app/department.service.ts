import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Department } from "./department";

@Injectable({
    providedIn: 'root'
  })
export class DepartmentService {

    private baseURL = "http://localhost:8080/api/departments";
  
    constructor(private httpClient: HttpClient) {
    }

    async getDepartmentList(): Promise<any> {
        return await this.httpClient.get<Department[]>(`${this.baseURL}`).toPromise();
    }
}
