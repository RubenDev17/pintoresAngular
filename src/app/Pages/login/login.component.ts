import { LoginService } from './../../services/LoginService';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/model/LoginForm';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  /* Objeto modelo del formulario */
  loginModel: LoginForm;

  /* Objeto de escucha */
  sub: Subscription;
  constructor(
    private LoginService: LoginService,
    private router: Router
  ) { 
    this.loginModel = new LoginForm();
    this.sub = new Subscription();
  }


  ngOnInit(): void {
    /* Nos subscribimos a la escucha */
    this.sub = this.LoginService.getEsLoginSub().subscribe(
      /* La respuesta */
      response =>{
        if(response){
          /* La petición ha ido correctamente y estamos logueados */
          this.router.navigate(['panelpintores']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /* Método petición de inicio de sesión */
  public EntraLogin(f: NgForm){
    this.LoginService.postLogin(this.loginModel);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
