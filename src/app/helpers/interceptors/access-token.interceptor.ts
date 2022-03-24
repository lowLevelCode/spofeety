import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginSpofeetyService } from "../../services/login-spofeety.service";


@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

    constructor(private readonly _loginSpofeetyService: LoginSpofeetyService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this._loginSpofeetyService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}