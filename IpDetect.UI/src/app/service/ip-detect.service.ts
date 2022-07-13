import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IpDetect } from '../models/ip-detect';

@Injectable({
  providedIn: 'root'
})
export class IpDetectService {
url = "GetIpAddress"
  constructor(private http : HttpClient) { }

  public GetIpDetect() : Observable<IpDetect>  {
    return this.http.get<IpDetect>(`${environment.apiUrl}/${this.url}`)
  }
}
