import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IMeme } from 'src/app/shared/interfaces/MemeInterface';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';
import { LikesService } from '../likes.service';
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
    user!:IUser;
    headers!: HttpHeaders;
    likes!:number;
    hasLikedNumber!:number

    constructor( private route:ActivatedRoute, 
      private memeService: MemesService,
      private authService:AuthServiceService,
      private router:Router,
      private likeServices:LikesService){
       this.memeId= route.snapshot.params['memeId'];
       this.user=this.authService.getUser;
       this.headers = new HttpHeaders()
       .set('Content-Type', 'application/json')
       .append('X-Authorization', `${ this.user?.accessToken}`);
    }

  ngOnInit(): void {
    this.memeService.getOne(this.memeId).subscribe((meme)=>{
      this.meme=meme;
    })
    this.authService.auth.subscribe((auth)=>{
       this.isAuth=auth;
    })

    this.likeServices.getLikes(this.memeId,this.headers)
    .subscribe((likes)=>{
       this.likes=likes;

    })

    this.likeServices.hasLiked(this.memeId,this.user._id,this.headers)
    .subscribe(data=>{
     this.hasLikedNumber=data;
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

  deleteHandler(memeId:string){
    this.router.navigate(['meme/delete',memeId])
  }

  likeHandler(memeId:string){
   
    this.router.navigate(['meme/like',memeId])
  }

  hasliked():boolean{

    if(this.hasLikedNumber!==0){
      return true
    }

    return false
  }

}
