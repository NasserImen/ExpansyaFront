import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
url = environment.baseURL
  constructor(private http:HttpClient) { }
  uploadFile(formdata):Observable<any>{
    return this.http.post<any>(this.url + "/upload/upload",formdata)
  }
}
