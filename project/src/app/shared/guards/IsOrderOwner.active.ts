import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { CardService } from "src/app/store/card.service";
import { AuthServiceService } from "../../auth/auth-service.service";

@Injectable({
    providedIn:'root'
})

export class OrderCreatorActivate implements CanActivate{
    


    constructor(private authService:AuthServiceService,
        private router:Router,
        private cardService:CardService){
       
       
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const creatorOrderRequired = route.data['creatorOrderRequired'];
    
      if (creatorOrderRequired === undefined) {
        return true;
      }
    
      const orderId = route.paramMap.get('orderId');
    
      if (typeof orderId !== 'string') {
        return this.router.createUrlTree(['/404']);
      }
    
      return this.cardService.getOne(orderId).pipe(
        map(order => {
          if (this.authService.getUser._id === order._ownerId) {
            return true;
          } else {
            return this.router.createUrlTree(['/404']);
          }
        })
      );
    }
    
}
