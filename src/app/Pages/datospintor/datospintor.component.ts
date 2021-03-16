import { Pintor } from './../../model/Pintor';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PintorService } from 'src/app/services/PintorService';

@Component({
  selector: 'app-datospintor',
  templateUrl: './datospintor.component.html',
  styleUrls: ['./datospintor.component.css']
})
export class DatospintorComponent implements OnInit, OnDestroy {

  /* Guardamos el id del pintor aqui */
  idPintor: any;

  /* Objeto donde recogemos el dato */
  recogePintor: any;

  /* Objeto de escucha */
  private sub: Subscription;

  /* Objeto donde almacenamos al pintor recibido */
  public datospintor: Pintor;

  constructor(
    private router: Router,
    private pintorService: PintorService,
    /* Objeto para recoger el dato */
    private route: ActivatedRoute
  ) { 
    /* Igualamos el pintor al del servicio por la petición*/
    this.datospintor = this.pintorService.getDatospintor();
    this.sub = new Subscription();    
  }

  ngOnInit(): void {
    /* Recogemos el id del pintor */
    this.recogePintor = this.route.paramMap.subscribe((params: ParamMap) =>{
      this.idPintor = params.get('id');
    });

    /* Nos subscribimos por si hay cambios en el pintor */
    this.sub = this.pintorService.getDatospintorSub().subscribe(
      (response: Pintor) => {
        this.datospintor = response;
      },
      error => {
        console.log(error);
      }
    );
    
    /* Realizamos la petición al servicio para que realice petición con id a la API */
    this.pintorService.getPintor(parseInt(this.idPintor));

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
