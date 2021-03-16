import { LoginService } from './../../services/LoginService';
import { Subscription } from 'rxjs';
import { Pintor } from 'src/app/model/Pintor';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PintorService } from 'src/app/services/PintorService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevopintor',
  templateUrl: './nuevopintor.component.html',
  styleUrls: ['./nuevopintor.component.css']
})
export class NuevopintorComponent implements OnInit, OnDestroy {

  /* Instanciamos oferta como atributo */
  pintorModel: Pintor;
  /* Creamos el objeto sub para poder subscribirnos */
  sub: Subscription;

  /* Creamos los objetos para las validaciones */
  public nombreExcesivo: boolean;
  public msgErrorNombre: string;
  public apellidosExcesivo: boolean;
  public msgErrorApellidos: string;
  public sueldoExcesivo: boolean;
  public msgErrorSueldo: string;

  constructor(
    private loginService: LoginService,
    private pintorService: PintorService,
    private router: Router
  ) { 
    /* Si nuestra booleana isLogin del servicio esta en false, nos echará. Debemos estar logeados para
    estar en esta pantalla */
    if(!this.loginService.getEsLogin()){
      this.router.navigate(['/login']);
      console.log("HE entrado");
    }
    this.sub = new Subscription();
    this.pintorModel = new Pintor();
    this.nombreExcesivo = false;
    this.msgErrorNombre = '';
    this.apellidosExcesivo = false;
    this.msgErrorApellidos = '';
    this.sueldoExcesivo = false;
    this.msgErrorSueldo = '';
  }

  ngOnInit(): void {
    /* Nos subscribimos al observable, en caso de tener una respuesta positiva iremos a la pagina panelpintores que estará actualizada
    y nos llegaran los datos actualizados con nuestro nuevo pintor */
    this.sub = this.pintorService.getBooleanPintorSub().subscribe(
      response=> {
        if(response){
          this.router.navigate(['/panelpintores']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  /* Creamos el pintor */
  public onSubmit(f: NgForm) {
    if(this.pintorModel.nombre.length > 15){
      this.nombreExcesivo = false;
      this.msgErrorNombre = 'El contenido del nombre es excesivamente grande';
    }else{
      this.nombreExcesivo = true;
    }

    if(this.pintorModel.apellidos.length > 20){
      this.apellidosExcesivo = false;
      this.msgErrorApellidos = 'El contenido de los apellidos es excesivamente grande';
    }else{
      this.apellidosExcesivo = true;
    }

    if(this.pintorModel.sueldo > 40000){
      this.sueldoExcesivo = false;
      this.msgErrorSueldo = 'Estas pagando demasiado, tenemos que ahorrar';
    }

    if(this.pintorModel.nombre.length < 15 && this.pintorModel.apellidos.length < 20 && this.pintorModel.sueldo < 40000){
      this.pintorService.crearPintor(this.pintorModel);
    }
  }
}
