import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-delete-meme',
  templateUrl: './delete-meme.component.html',
  styleUrls: ['./delete-meme.component.css']
})
export class DeleteMemeComponent implements OnInit {
  memeId: string | ''='';
  headers!: HttpHeaders;
  
  constructor(private route:ActivatedRoute,
    private router:Router,
    private authService:AuthServiceService,
    private memeService:MemesService){
    
      this.headers = new HttpHeaders()
       .set('Content-Type', 'application/json')
      .append('X-Authorization', `${ this.authService.getUser.accessToken}`);
      this.memeId=this.route.snapshot.params['memeId']
  }
  ngOnInit(): void {
     this.memeService
     .deleteOne(this.memeId,this.headers)
     .subscribe((data)=>{
        console.log(data);
        this.router.navigate(['memes'])
     })
  }

}
