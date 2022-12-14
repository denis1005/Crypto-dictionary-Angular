import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  headers: HttpHeaders;
  userId:string | ''='';
  user: IUser | null=null;
  @ViewChild('form') form!: NgForm

  constructor ( public authService:AuthServiceService,
    private route:ActivatedRoute,
    private router:Router) {

    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('X-Authorization', `${ this.authService.getUser.accessToken}`);
      this.userId=this.route.snapshot.params['userId']
      this.user=authService.getUser;

  }
  ngOnInit(): void {
    
  }

  EditProfileHandler(){
    const {username,email,address,phone}=this.form.value;
    const newUser={
      'email':email ,
  
      'username':username,
  
       'imgUrl':this.authService.getUser.imgUrl ,
  
       '_id':this.authService.getUser._id ,
  
       'accessToken':this.authService.getUser.accessToken ,
  
       'address':address,
  
       'phone':phone ,   
    }

    localStorage.setItem("user",JSON.stringify(newUser));
    this.router.navigate(['profile'])
}
}
