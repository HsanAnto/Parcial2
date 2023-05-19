import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo-detail';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {

  equipos: Array<Equipo> = [];
  selected: Boolean = false;
  selectedEquipo!: Equipo

  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos) => {
      this.equipos = equipos;
    });
  }

  onSelected(equipo: Equipo): void {
    this.selected = true;
    this.selectedEquipo = equipo;
  }

  ngOnInit() {
    this.getEquipos();
  }

}
