import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatospintorComponent } from './datospintor.component';



@NgModule({
  declarations: [DatospintorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DatospintorComponent
  ]
})
export class DatospintorModule { }
