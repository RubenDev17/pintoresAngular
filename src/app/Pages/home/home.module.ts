import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule //Objeto para la navegacion entre paginas
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
