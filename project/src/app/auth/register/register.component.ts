import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private error$=new BehaviorSubject<string | null>(null);
  error=this.error$.asObservable();
  
  constructor(private authService: AuthServiceService,
    private router: Router){

  }
 
  registerHandler(form: NgForm):void{
    if(form.invalid){return}
    const {email,username,imageUrl,password,address,phone}=form.value;
    this.authService.register(email,username,imageUrl,password,address,phone)
    .subscribe({
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

