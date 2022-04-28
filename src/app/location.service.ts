import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseURL = "http://localhost:8080/api/locations";
  
    constructor(private httpClient: HttpClient) {
    }

    async getLocationList(): Promise<any> {
        return await this.httpClient.get<Location[]>(`${this.baseURL}`).toPromise();
    }
}
