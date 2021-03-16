import { Pintor } from './../../model/Pintor';
import { LoginService } from './../../services/LoginService';
import { Subject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PintorService } from 'src/app/services/PintorService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panelpintores',
  templateUrl: './panelpintores.component.html',
  styleUrls: ['./panelpintores.component.css']
})
export class PanelpintoresComponent implements OnInit, OnDestroy {

  /* Array de pintores */
  public pintores: Array<Pintor>;

  /* Objeto de escucha para el array */
  sub: any

  constructor(
    private loginService: LoginService,
    private pintorService: PintorService,
    private router: Router
  ) { 
    this.sub =  new Subject<any>();

    /* Comprobamos que seguimos logueados */
    if(!this.loginService.getEsLogin()){
      //Si no estamos logueados, nos manda al login nuevamente
      this.router.navigate(['login']);
    }

    /* Cargamos el array de pintores */
    this.pintores = this.pintorService.getArrayPintores();
  }

  ngOnInit(): void {
    //Realizamos escucha para las ofertas para que se actualizen cuando borramos una
    this.sub = this.pintorService.getPintoresSub().subscribe(
      (response: any) => {
        this.pintores = response;
      },
      error => {
        console.log(error);
      }
    );

    /* Cargamos las ofertas */
    this.pintorService.getPintores();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  public eliminarPintor(id: number): void{
    this.pintorService.eliminarPintor(id);
  }

  public modificarPintor(id: number): void{
    this.router.navigate(['modificarpintor', id]);
  }
}
