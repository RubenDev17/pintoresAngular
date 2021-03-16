import { ModificarpintorModule } from './modificarpintor/modificarpintor.module';
import { NuevopintorModule } from './nuevopintor/nuevopintor.module';
import { PanelpintoresModule } from './panelpintores/panelpintores.module';
import { LoginModule } from './login/login.module';
import { DatospintorModule } from './datospintor/datospintor.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    DatospintorModule,
    LoginModule,
    PanelpintoresModule,
    NuevopintorModule,
    ModificarpintorModule
  ],
  exports: [
    HomeModule,
    DatospintorModule,
    LoginModule,
    PanelpintoresModule,
    NuevopintorModule,
    ModificarpintorModule
  ]
})
export class PagesModule { }
