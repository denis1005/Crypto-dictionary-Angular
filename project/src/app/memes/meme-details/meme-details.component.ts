import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IMeme } from 'src/app/shared/interfaces/MemeInterface';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-meme-details',
  templateUrl: './meme-details.component.html',
  styleUrls: ['./meme-details.component.css']
})

export class MemeDetailsComponent implements OnInit {
  
    meme:IMeme | null =null;
    memeId: string | ''='';
    isAuth:boolean=false;
    isCreator:boolean=false;
    user!:IUser

    constructor( private route:ActivatedRoute, 
      private memeService: MemesService,
      private authService:AuthServiceService,
      private router:Router){
       this.memeId= route.snapshot.params['memeId']
       this.user=this.authService.getUser
    }

  ngOnInit(): void {
    this.memeService.getOne(this.memeId).subscribe((meme)=>{
      this.meme=meme;
    })
    this.authService.auth.subscribe((auth)=>{
       this.isAuth=auth;
    })
    
   
  }

  isOwner( ):boolean{
    if(this.user._id==this.meme?._ownerId){
       return true
    }else {
      return false;
    }
  }

  editHandler(memeId:string){
    this.router.navigate(['meme/edit',memeId])
  }

}
