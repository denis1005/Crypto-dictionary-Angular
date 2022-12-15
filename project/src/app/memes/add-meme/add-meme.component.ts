import { HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-add-meme',
  templateUrl: './add-meme.component.html',
  styleUrls: ['./add-meme.component.css']
})
export class AddMemeComponent {
  @ViewChild('form') form!: NgForm
  headers!: HttpHeaders;

  constructor(
    private memeService:MemesService,
    private authService:AuthServiceService,
    private router:Router){

     this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
     .append('X-Authorization', `${ this.authService.getUser.accessToken}`);
 }

 createHandler():void{
  const {title,imgUrl}=this.form.value;
  this.memeService.
  createOne(title,imgUrl,this.headers)
  .subscribe((data)=>{
     this.router.navigate(['memes'])
  })
}

}
