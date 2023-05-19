import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './partido-list/partido-list.component';
import { PartidoDetailComponent } from './partido-detail/partido-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PartidoListComponent],
  declarations: [PartidoListComponent, PartidoDetailComponent]
})
export class PartidoModule { }
