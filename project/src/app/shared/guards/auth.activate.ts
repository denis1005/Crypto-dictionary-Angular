import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "../../auth/auth-service.service";

@Injectable({
    providedIn:'root'
})

export class AuthActivate implements CanActivate{
    isAuth:boolean=false

    constructor(private authService:AuthServiceService,private router:Router){
       this.authService.auth.subscribe((auth)=>{
         this.isAuth=auth;
       })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       const loginRequired=route.data['loginRequired'];
       if(loginRequired===undefined || this.isAuth==loginRequired){return true};
       console.log(route.url)
       return this.router.createUrlTree(['/login']);

    }
    
}