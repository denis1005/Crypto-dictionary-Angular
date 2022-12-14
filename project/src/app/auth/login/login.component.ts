import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   constructor(private authService: AuthServiceService,
    private router:Router){

   }

   loginHandler(form: NgForm):void {
    const {email,password}=form.value;
    this.authService.login(email,password)
    .subscribe(user=>{
      this.authService.user=user;
      localStorage.setItem("user",JSON.stringify(user));
      this.router.navigate(['/'])
    })
   }
}
