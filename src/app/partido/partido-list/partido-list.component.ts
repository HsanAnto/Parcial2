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
  selected: Boolean = false;
  selectedPartido!: Partido

  constructor(private partidoService: PartidoServiceService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
    });
  }

  onSelected(partido: Partido): void {
    this.selected = true;
    this.selectedPartido = partido;
  }

  ngOnInit() {
    this.getPartidos();
  }

}

