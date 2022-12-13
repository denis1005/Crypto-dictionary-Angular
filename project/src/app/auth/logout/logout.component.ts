import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/UserInterfase';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user: IUser | null= null
  headers!: HttpHeaders;

  constructor(private authServices:AuthServiceService, private router:Router) {
    this.user=this.authServices.getUser
    console.log(this.user)
      this.headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .append('X-Authorization', `${ this.user?.accessToken}`);
   
  
   
 
}
  ngOnInit(): void {
    if (this.authServices.isLoggedIn) {
      this.authServices.logout(this.headers).subscribe({
        next:() => {
          localStorage.clear();
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      // Redirect to login page if the user is not logged in.
      this.router.navigate(['/login']);
    }
  }

}

