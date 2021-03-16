import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelpintoresComponent } from './panelpintores.component';



@NgModule({
  declarations: [PanelpintoresComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PanelpintoresComponent
  ]
})
export class PanelpintoresModule { }
