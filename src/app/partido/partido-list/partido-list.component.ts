import { Component, OnInit } from '@angular/core';
import { PartidoServiceService } from '../partido-service.service';
import { Partido } from '../partido';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Array<Partido> = [];
  golesLocal: { [country: string]: number } = {};
  golesLocalArray: Array<{name: string, goals: number}> = [];

  reverseOrder = (a: {key: string, value: number}, b: {key: string, value: number}) => b.value - a.value;

  constructor(private partidoService: PartidoServiceService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;

      // Calculate home goals.
      for (const partido of partidos) {
        if (!this.golesLocal[partido.home_team_country] && partido.home_team.goals != null) {
          this.golesLocal[partido.home_team.name] = partido.home_team.goals;
        }
        else
        {
          if(partido.home_team.goals != null)
          {
            this.golesLocal[partido.home_team.name] += partido.home_team.goals;
          }

        }
      }

      // Convert golesLocal to an array and sort it.
      this.golesLocalArray = Object.entries(this.golesLocal)
        .map(([name, goals]) => ({name, goals}))
        .sort((a, b) => b.goals - a.goals);
    });
  }

  ngOnInit() {
    this.getPartidos();
  }

}


