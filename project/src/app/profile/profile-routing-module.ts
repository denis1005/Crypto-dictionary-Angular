import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "../profile/edit-profile/edit-profile.component";
import { ProfileComponent } from "./profile/profile.component";


const routes:Routes = [
  
   {
      path:'profile',
      component:ProfileComponent,
   },
   {
      path:'profile/edit/:userId',
      component:EditProfileComponent,
   },
]

export const ProfileRoutingModule = RouterModule.forChild(routes);