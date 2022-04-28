import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timeslot } from './timeslot';

@Injectable({
  providedIn: 'root'
})
export class TimeslotService {

  private baseURL = "http://localhost:8080/api/timeslots";
  
    constructor(private httpClient: HttpClient) {
    }

    async getTimeslotList(): Promise<any> {
        return await this.httpClient.get<Timeslot[]>(`${this.baseURL}`).toPromise();
    }
}
