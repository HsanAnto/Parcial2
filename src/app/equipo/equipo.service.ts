import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, map } from 'rxjs';
import { Equipo } from './equipo-detail';
import { Grupo } from './grupo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl: string = environment.baseUrlEquipos;

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<{ groups: Grupo[] }>(this.apiUrl).pipe(
      map(response => {
        const equipos: Equipo[] = [];
        for (const grupo of response.groups) {
          equipos.push(...grupo.teams);
        }
        return equipos;
      })
    );
  }

}
