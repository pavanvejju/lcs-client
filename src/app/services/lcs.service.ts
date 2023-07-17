import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LcsRequest } from '../model/lcs-request.model';
import { LcsResponse } from '../model/lcs-response.model';

@Injectable({
  providedIn: 'root'
})
export class LcsService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {
    
  }

  calculateFunction(lcsRequest: LcsRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/lcs/`, lcsRequest);

  }

  
}