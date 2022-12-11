import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import {environment} from '../app/environments/environment.prod'

const apiUrl=environment.apiUrl

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(req.url.startsWith('/api')){
            req=req.clone({url: req.url.replace('/api',apiUrl)})
        }

        return next.handle(req)
    }
}

export const appInterceptorProvider: Provider = {
    provide:HTTP_INTERCEPTORS,
    useClass:AppInterceptor,
    multi:true
}