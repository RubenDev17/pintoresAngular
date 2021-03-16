import { LoginService } from './LoginService';
import { Pintor } from 'src/app/model/Pintor';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

/*Esta clase sera la que manejara la parte de los pintores*/
@Injectable()
export class PintorService{
    //OJO!!! IMPLEMENTARLO EN EL APPMODULE COMO PROVIDER
    private pintores: Array<Pintor>; /* Array donde cargaremos todos nuestros pintores tras la respuesta de la API */
    private pintores$: Subject<Array<Pintor>>; /* Objeto observable donde notificaremos cuando se realice algun cambio en el array */

    private datospintor: Pintor; /* Aqui meteremos los datos de un pintor */
    private datospintor$: Subject<Pintor>;

    private nuevopintor: boolean; /* Utilizamos un boolean para poder actualizar los datos cuando creemos un pintor */
    private nuevopintor$: Subject<boolean>;

    constructor(
        private httpClient: HttpClient, /* Objeto httpClient para las peticiones de la api */
        private loginService: LoginService
    ){
        this.pintores = new Array<Pintor>();
        this.pintores$ = new Subject<Array<Pintor>>();
        this.datospintor = new Pintor();
        this.datospintor$ = new Subject<Pintor>();
        this.nuevopintor = false;
        this.nuevopintor$ = new Subject<boolean>();
    }

    /* Método que nos devuelve el observable */
    public getPintoresSub(): Observable<any>{
        /* Devolvemos el observable para poder subscribirnos */
        return this.pintores$.asObservable();
    }

    /* Método que nos devolverá el array de pintores */
    public getArrayPintores(): Array<Pintor>{
        return this.pintores;
    }

    /* Metodo que devuelve el objeto con los datos del pintor */
    public getDatospintor(): Pintor{
        return this.datospintor;
    }

    /* Método que devuelve el observable del objeto */
    public getDatospintorSub(): Observable<any>{
        return this.datospintor$.asObservable();
    }

    /* Método que nos devolvera el boolean */
    public getBooleanPintor(): boolean{
        return this.nuevopintor;
    }

    /* Método que nos devuelve el observable del boolean */
    public getBooleanPintorSub(): Observable<any>{
        return this.nuevopintor$.asObservable();
    }

    /* Método para realizar una petición get para recibir todos los pintores */
    public getPintores():void{
        const httpOptions = {
            /* Creamos objeto para las cabeceras */
            headers: new HttpHeaders(
                {
                }
            )
        };
        this.httpClient.get("http://localhost:8080/api/pintors", httpOptions).subscribe(
            (response:any) => {
                this.pintores = response; /* Guardamos el listado de pintores de la respuesta de la api en el array */
                this.pintores$.next(this.pintores); /* Avisamos de que hay cambios en el observable */
            },
            error => {
                console.log(error);
            } 
        )
    }

    /* Método que realiza la petición get para recibir los datos de un pintor en concreto a través de su id */
    public getPintor(id: number):void{
        const httpOptions = {
            headers: new HttpHeaders(
                {}
            )
        };
        this.httpClient.get("http://localhost:8080/api/pintors/" + id, httpOptions).subscribe(
            (response:any) => {
                this.datospintor = response;
                this.datospintor$.next(this.datospintor);
            },
            error => {
                console.log(error);
            }
        );
    }

    /* Método para crear un pintor */
    public crearPintor(pintor: Pintor){
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer ' + this.loginService.getToken(), /*Enviamos la cabecera de autorizacion con el token de loginService*/
                    'Content-Type': 'application/json' /*Este es uno de los datos de cabecera */
                }
            )
        };
        this.httpClient.post('http://localhost:8080/api/pintors', JSON.stringify(pintor), httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.nuevopintor = true;
                this.nuevopintor$.next(this.nuevopintor);
            },
            error => {
                console.log(error);
                this.nuevopintor = false;
            }
        );
    }

    /* Método para eliminar un pintor */
    public eliminarPintor(id: number){
        /* Cabecera */
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Authorization' : 'Bearer ' + this.loginService.getToken()
                }
            )
        }

        /* Petición para eliminar */
        this.httpClient.delete("http://localhost:8080/api/pintors/" + id, httpOptions).subscribe(
            (response: any) => {
                /* Actualizamos lista de ofertas realizando nuevamente la petición */
                this.getPintores();
            },
            error => {
                console.log(error);
            }
        )
    }

    /* Método para modificar un pintor */
    public modificaPintor(pintor: Pintor){
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Authorization': 'Bearer ' + this.loginService.getToken(), /* Enviamos la cabecera de autorizacion con el token de loginService */
                    'Content-Type': 'application/json' /* Este es uno de los datos de cabecera */
                }
            )
        };
        this.httpClient.put('http://localhost:8080/api/pintors', JSON.stringify(pintor), httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.getPintores(); /* Actualizamos la lista de ofertas */
            },
            error => {
                console.log(error);
            }
        );
    }
}