import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevopintorComponent } from './nuevopintor.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [NuevopintorComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NuevopintorComponent
  ]
})
export class NuevopintorModule { }
