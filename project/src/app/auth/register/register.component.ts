import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
  constructor(private authService: AuthServiceService,
    private router: Router){

  }
 
  registerHandler(form: NgForm):void{
    const {email,username,imageUrl,password,address,phone}=form.value;
    this.authService.register(email,username,imageUrl,password,address,phone)
    .subscribe(user=>{
      this.authService.user=user;
      localStorage.setItem("user",JSON.stringify(user));
      this.router.navigate(['/'])
    })
   }
  }

