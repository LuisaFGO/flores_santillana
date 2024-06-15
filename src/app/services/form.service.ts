import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send_email`, data, {
      responseType: 'text',
    });
  }
}
