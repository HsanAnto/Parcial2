import { Component, Input, OnInit } from '@angular/core';
import { Partido } from '../partido';

@Component({
  selector: 'app-partido-detail',
  templateUrl: './partido-detail.component.html',
  styleUrls: ['./partido-detail.component.css']
})
export class PartidoDetailComponent implements OnInit {

  @Input() partidoDetail!: Partido;
  constructor() { }

  ngOnInit() {
  }

}
