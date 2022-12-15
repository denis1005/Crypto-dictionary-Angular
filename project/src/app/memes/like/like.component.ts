import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { LikesService } from '../likes.service';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  memeId: string | ''='';
  headers!: HttpHeaders;

   constructor(private route:ActivatedRoute, 
    private likeServices: LikesService,
    private authService:AuthServiceService,
    private router:Router,){
      this.memeId= route.snapshot.params['memeId'];
      this.headers = new HttpHeaders()
       .set('Content-Type', 'application/json')
       .append('X-Authorization', `${ this.authService.getUser.accessToken}`);
       this.likeServices.like(this.memeId,this.headers).subscribe((result)=>{
        console.log(result);
        this.router.navigate(['meme/details',this.memeId])
      })
   }
}
