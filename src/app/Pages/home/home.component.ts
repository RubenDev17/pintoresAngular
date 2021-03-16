
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pintor } from 'src/app/model/Pintor';
import { PintorService } from 'src/app/services/PintorService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  /*Creamos un objecto de pintor*/
  public pintores: Array<Pintor>;
  /* Creamos un objeto de escucha */
  private sub: Subscription;

  constructor(
    /* Inyectamos el servicio de los pintores */
    private pintorService: PintorService,
    /* Inyectamos la navegación */
    private router: Router
  ) { 
    /* Inicializamos el array pasandole los valores del array del servicio */
    this.pintores = this.pintorService.getArrayPintores();

    /* Inicializamos el objeto de escucha */
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    /* Nos subscribimos a la escucha */
    this.sub = this.pintorService.getPintoresSub().subscribe(
      /* Hay cambios */
      (response:any) => {
        /* Importamos la respuesta en nuestro array */
        this.pintores = response;
      },
      error => {
        console.log(error);
      }
    );

    //Realizamos la petición al servicio para que cargue las ofertas
    this.pintorService.getPintores();
  }

  ngOnDestroy(){
    //Nos desubscribimos
    this.sub.unsubscribe();
  }

  //Método para el botón que nos llevará al path de los datos del pintor
  public verDatosDelPintor(id:number):void{
    this.router.navigate(['datospintor', id]);
  }
}
