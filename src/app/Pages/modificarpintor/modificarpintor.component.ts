import { PintorService } from 'src/app/services/PintorService';
import { LoginService } from './../../services/LoginService';
import { Pintor } from './../../model/Pintor';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-modificarpintor',
  templateUrl: './modificarpintor.component.html',
  styleUrls: ['./modificarpintor.component.css']
})
export class ModificarpintorComponent implements OnInit, OnDestroy {

  /* Guardamos el id del pintor aqui */
  idPintor: any;

  /* Objeto donde recogemos el dato */
  private recogePintor: any;

  /* Objeto de escucha */
  private sub: Subscription;

  /* Objeto donde almacenaremos el pintor recibido */
  public modificaPintor: Pintor;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private pintorService: PintorService,

    /* Objeto donde recogemos el dato */
    private route: ActivatedRoute
  ) { 
      //Comprobamos que seguimos logueados
      if(!this.loginService.getEsLogin()){
        //Si no es asi nos manda al login nuevamente
        this.router.navigate(['login']);
      }

      this.sub = new Subscription();

      /* Igualamos el pintor al del servicio cargado por la petición */
      this.modificaPintor = this.pintorService.getDatospintor();
  }


  ngOnInit(): void {
   /* Recogemos el id del pintor */
    this.recogePintor = this.route.paramMap.subscribe((params: ParamMap) =>{
        this.idPintor = params.get('id');
    });

     /* Nos subscribimos por si hay cambios en el pintor */
     this.sub = this.pintorService.getDatospintorSub().subscribe(
       (response: Pintor) => {
         /* Hemos recibido al pintor */
         this.modificaPintor = response;
       },
       error => {
         console.log(error);
       }
     );

     /*Realizamos la petición al servicio para que se realice la petición de la id a la API */
     this.pintorService.getPintor(parseInt(this.idPintor));
  }

  public onSubmit(f: NgForm){
    this.pintorService.modificaPintor(this.modificaPintor);
    this.router.navigate(['/panelpintores']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
