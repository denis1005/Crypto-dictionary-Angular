import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routin-module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from "../shared/shared.module";
import { EditProfileComponent } from './edit-profile/edit-profile.component';




@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        ProfileComponent,
        EditProfileComponent,
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class AuthModule { }
