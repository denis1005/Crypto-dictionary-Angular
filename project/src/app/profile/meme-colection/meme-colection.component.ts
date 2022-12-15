import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { MemesService } from 'src/app/memes/memes.service';
import { IMeme } from 'src/app/shared/interfaces/MemeInterface';

@Component({
  selector: 'app-meme-colection',
  templateUrl: './meme-colection.component.html',
  styleUrls: ['./meme-colection.component.css']
})
export class MemeColectionComponent {
  memesData:IMeme[] | null = null;
    
  constructor(private memeService:MemesService
    ,private router:Router
    ,private authService:AuthServiceService){

  }

  ngOnInit(): void {
     this.memeService.getAll().subscribe((memes)=>{
        this.memesData=memes.filter(meme=>meme._ownerId==this.authService.getUser._id);
     })
  }

  clickHandler(memeId:string){
    this.router.navigate(['meme/details',memeId],)
  } 
}
