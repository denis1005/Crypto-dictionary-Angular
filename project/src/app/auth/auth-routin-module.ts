import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";


const routes:Routes = [
    {
       path:'login',
       component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent,
     },

     {
      path:'logout',
      component:LogoutComponent,
   },

   {
      path:'profile',
      component:ProfileComponent,
   },
   {
      path:'profile/edit/:userId',
      component:EditProfileComponent,
   },
]

export const AuthRoutingModule = RouterModule.forChild(routes);