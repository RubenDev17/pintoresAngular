import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarpintorComponent } from './modificarpintor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModificarpintorComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ModificarpintorComponent
  ]
  
})
export class ModificarpintorModule { }
