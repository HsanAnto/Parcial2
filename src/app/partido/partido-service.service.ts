import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Partido } from './partido';
@Injectable({
  providedIn: 'root'
})
export class PartidoServiceService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(this.apiUrl);
  }

}
