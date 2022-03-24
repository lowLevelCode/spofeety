import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginSpofeetyService  } from "../../services/login-spofeety.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private readonly _loginSpofeetyService: LoginSpofeetyService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            if (err.status === 401) {
                this._loginSpofeetyService.logout();
                location.reload();
            }

            const error = err.error.message || err.statusText;
            return throwError(()=> new Error(error));
        }))
    }
}