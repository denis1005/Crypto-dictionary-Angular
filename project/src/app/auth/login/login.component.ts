import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private error$=new BehaviorSubject<string | null>(null);
  error=this.error$.asObservable();

   constructor(private authService: AuthServiceService,
    private router:Router){

   }

   loginHandler(form: NgForm):void {
    if(form.invalid){return}
    const {email,password}=form.value;
    this.authService.login(email,password)
    .subscribe(
      {
        next:(user)=>{
          this.authService.user=user;
          localStorage.setItem("user",JSON.stringify(user));
          this.router.navigate(['/'])
        },
        error:(err)=>{
          this.error$.next(err.error.message)
        }
      
    })
   }

   
}
