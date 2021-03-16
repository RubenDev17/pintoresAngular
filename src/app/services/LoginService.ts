import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Subject } from "rxjs";
import { LoginForm } from '../model/LoginForm';

//OJO IMPLEMENTAR EN EL PROVIDER DE APPMODULE

@Injectable()
export class LoginService {
    /* Clave token */
    private token: string;

    /* Variables de control */
    private esLogin: boolean;

    /* Variable de escucha */
    private esLogin$: Subject<boolean>;

    constructor(
        /* Objeto para las peticiones */
        private httpClient: HttpClient
    ){
        this.token = '';
        this.esLogin = false;
        this.esLogin$ = new Subject<boolean>();
    }

    /* Métodos que devolvemos */
    public getEsLogin(): boolean {
        return this.esLogin;
    }

    public getEsLoginSub(): Observable<any>{
        return this.esLogin$.asObservable();
    }

    /* Devolvemos el token */
    public getToken(): string {
        return this.token;
    }

    /* Petición post para el login */
    public postLogin(loginModel: LoginForm){
        /* Datos de la cabecera */
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json'
                }
            )
        };

        /* Realizamos petición */
        this.httpClient.post("http://localhost:8080/api/authenticate", JSON.stringify(loginModel), httpOptions).subscribe(
            /* Respondemos obteniendo el token */
            (response: any) => {
                /* Guardamos el token de la respuesta */
                this.token = response.id_token;

                /* Cambiamos la variable de control a true */
                this.esLogin = true;

                /* Notificamos el cambio */
                this.esLogin$.next(this.esLogin);
            },

            //Error
            error => {
                /* Cambiamos la variable de control */
                this.esLogin = false;
            }
        )
    }

    /* Con este método cerraremos sesión en caso de que tengamos algun tipo de fallo o necesidad */
    public Logout(): void{
        this.token = '';
        this.esLogin = false;
        this.esLogin$.next(this.esLogin);
    }
}