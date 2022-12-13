import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:IUser | null=null;
  headers!: HttpHeaders;


    constructor (public authService: AuthServiceService){
      this.headers = new HttpHeaders()
       .set('Content-Type', 'application/json')
       .append('X-Authorization', `${ this.authService.getUser.accessToken}`);
    }

  ngOnInit(): void {
    this.authService.getProfile(this.headers).subscribe((profile)=>{
        this.profile=profile
    })
  }
}
