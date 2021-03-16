import { ModificarpintorComponent } from './Pages/modificarpintor/modificarpintor.component';
import { NuevopintorComponent } from './Pages/nuevopintor/nuevopintor.component';
import { PanelpintoresComponent } from './Pages/panelpintores/panelpintores.component';
import { LoginComponent } from './Pages/login/login.component';
import { DatospintorComponent } from './Pages/datospintor/datospintor.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {//Este sera el path principal donde cargara nuestro Front cuando accedamos a el
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {//Ahora ya definimos los Paths
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'datospintor/:id',
    component: DatospintorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'panelpintores',
    component: PanelpintoresComponent
  },
  {
    path: 'nuevopintor',
    component: NuevopintorComponent
  },
  {
    path: 'modificarpintor/:id',
    component: ModificarpintorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
