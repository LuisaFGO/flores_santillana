import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.http.post(`${this.url}/send_email`, data, {
      responseType: 'text',
    });
  }
}
