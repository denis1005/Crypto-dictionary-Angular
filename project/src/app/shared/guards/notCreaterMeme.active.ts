import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { MemesService } from "src/app/memes/memes.service";
import { AuthServiceService } from "../../auth/auth-service.service";
import { IMeme } from "../interfaces/MemeInterface";

@Injectable({
    providedIn:'root'
})

export class NotMemeCreatorActivate implements CanActivate{
    memeId:string | ''='';
    


    constructor(private authService:AuthServiceService,
        private router:Router,
        private route:ActivatedRoute,
        private memeService:MemesService){
      
      
       
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const NotCreatorRequired = route.data['NotCreatorRequired'];
    
      if (NotCreatorRequired === undefined) {
        return true;
      }
    
      const memeId = route.paramMap.get('memeId');
    
      if (typeof memeId !== 'string') {
        return this.router.createUrlTree(['/404']);
      }
    
      return this.memeService.getOne(memeId).pipe(
        map(meme => {
          if (this.authService.getUser._id === meme._ownerId) {
            return this.router.createUrlTree(['/404']);
          } else {
            return true;
          }
        })
      );
    }

   
}