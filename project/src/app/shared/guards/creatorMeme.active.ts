import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { MemesService } from "src/app/memes/memes.service";
import { AuthServiceService } from "../../auth/auth-service.service";
import { IMeme } from "../interfaces/MemeInterface";

@Injectable({
    providedIn:'root'
})

export class MemeCreatorActivate implements CanActivate{
    isAuth:boolean=false;
    memeId:string | ''='';
    meme:IMeme | null=null;


    constructor(private authService:AuthServiceService,
        private router:Router,
        private route:ActivatedRoute,
        private memeService:MemesService){
       this.authService.auth.subscribe((auth)=>{
         this.isAuth=auth;
       })
       this.memeId=this.route.snapshot.params['memeId'];
       this.memeService.getOne(this.memeId).subscribe((meme)=>{
         this.meme=meme
       })
       
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const creatorRequired = route.data['creatorRequired'];
    
      if (creatorRequired === undefined) {
        return true;
      }
    
      const memeId = route.paramMap.get('memeId');
    
      if (typeof memeId !== 'string') {
        return this.router.createUrlTree(['/404']);
      }
    
      return this.memeService.getOne(memeId).pipe(
        map(meme => {
          if (this.authService.getUser._id === meme._ownerId) {
            return true;
          } else {
            return this.router.createUrlTree(['/404']);
          }
        })
      );
    }
    
}
