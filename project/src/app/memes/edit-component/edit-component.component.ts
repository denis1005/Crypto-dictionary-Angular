import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { IMeme } from 'src/app/shared/interfaces/MemeInterface';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  memeId: string | ''='';
  headers!: HttpHeaders;
  meme:IMeme | null =null;
  @ViewChild('form') form!: NgForm

  constructor(private route:ActivatedRoute,
     private memeService:MemesService,
     private authService:AuthServiceService,
     private router:Router){

      this.headers = new HttpHeaders()
       .set('Content-Type', 'application/json')
      .append('X-Authorization', `${ this.authService.getUser.accessToken}`);
      this.memeId=this.route.snapshot.params['memeId']

  }
  ngOnInit(): void {
    this.memeService.getOne(this.memeId).subscribe((meme)=>{
      this.meme=meme;
    })
    
  }
  


  editHandler():void{
    if(this.form.invalid){return}
    const {title,imgUrl}=this.form.value;
    this.memeService.
    updateOne(this.memeId,{title,imgUrl},this.headers)
    .subscribe((data)=>{
       this.router.navigate(['meme/details',this.memeId])
    })
  }
}


